import { useEffect, useState } from "react";

export default function useHttpClient(){

    function useFetch(
        httpMethod : string,
        url : string,
        options : RequestInit | undefined | null    
    ){
        return fetch( url , 
            {
                method : httpMethod,
                body : options?.body,
                headers : options?.headers
            }
        );
    }

    function doAction<T>( 
         method : string ,
         url : string ,
         options : RequestInit | undefined | null
     ){
        const [ isLoading , setIsLoading ] = useState<boolean>(false);
        const [ error , setError ] = useState<string | undefined | null>(null);
        const [ data , setData ] = useState<T | undefined | null>(null);
        
        useEffect(() => {
            setIsLoading(true);
            useFetch( method , url , options )
            .then( res => {
                console.log(res);
                return res.json();
            })
            .then( data => {
                setData(data as T);
            })
            .catch( e => setError(e))
            .finally( () => setIsLoading(false));

        } , [] );

        return [ data , isLoading , error ]; 
    }

    const HTTP_METHODS = {
        GET : <T>( url : string , options : RequestInit | undefined | null ) => {
            return doAction<T>( 'GET' , url , options );
        },
        POST : <T>( url : string , options : RequestInit | undefined | null ) => {
            return doAction<T>( 'POST' , url , options );
        },
        PUT : <T>( url : string , options : RequestInit | undefined | null ) => {
            return doAction<T>( 'PUT' , url , options );
        },
        DELETE : <T>( url : string , options : RequestInit | undefined | null ) => {
            return doAction<T>( 'DELETE' , url , options );
        },
        PATCH : <T>( url : string , options : RequestInit | undefined | null ) => {
            return doAction<T>( 'PATCH' , url , options );
        },
        OPTION : <T>( url : string , options : RequestInit | undefined | null ) => {
            return doAction<T>( 'OPTION' , url , options );
        },
    }
    

    return {
        get : HTTP_METHODS.GET,
        post :HTTP_METHODS.POST,
        put : HTTP_METHODS.PUT,
        patch : HTTP_METHODS.PATCH,
        delete : HTTP_METHODS.DELETE,
        option : HTTP_METHODS.OPTION
    }

}
