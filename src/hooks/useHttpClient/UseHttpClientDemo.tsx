import useHttpClient from "./useHttpClient"

export default function UseHTTPClientDemo(){

    const httpClient = useHttpClient();
    const [ data , isLoading , error ] = httpClient.get<any[]>('/test.json',null);

    return (
        <>
         <h1>User http client demo</h1>
         <div>
            { 
                isLoading 
                ? 'Loading...'
                : (
                  <ul>
                    { (data as any [] )?.map( d => <li key={d.id}>{d.name}</li> )}
                  </ul>
                )       
            }
         </div>
        </>
    )
}