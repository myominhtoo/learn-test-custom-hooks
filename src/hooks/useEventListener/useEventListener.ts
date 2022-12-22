import { useEffect, useRef } from "react";

export default function useEventListener( 
    element : Element | HTMLElement | Window = window ,
    eventType : string , 
    callback : ( e : any | Event ) => void  ){

    const callbackRef = useRef(callback);

    /*
     to be able to do dynamic callback 
    */
    useEffect(() => {
        callbackRef.current = callback;
    } , [ callback ]);

    useEffect( () => {
        if( element == null ) return ;
        element.addEventListener( eventType , e => {
            callback(e);
        });
        /*
         will remove listener when destroy
        */
        return () => element.removeEventListener( eventType , e  => callback(e));
    } , [ eventType , element ] );

}