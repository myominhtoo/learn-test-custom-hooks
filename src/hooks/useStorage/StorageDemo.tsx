import { useLocalStorage } from "./useStorage"

export function StorageDemo(){

    const [ name , setName , removeName ] = useLocalStorage<string>( 'name' , '' );

    return ( 
        <div>
            <h2>Store Demo</h2>
            <small>{name}</small>
            <br/>
            <input 
             type="text" 
             onChange={e => {
                setName(e.target.value as string);
              }}
             value={name}
            />
            <button onClick={() => removeName()}>Clear</button>
        </div>
    )
}