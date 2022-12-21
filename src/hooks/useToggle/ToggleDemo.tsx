import useToggle from "./useToggle"

export function ToggleDemo(){

    const [ firstVal , togglefirstVal ] = useToggle<boolean,boolean>( false );
    const [ strVal , toggleStrVal ] = useToggle<string,string>( 'hello' , ['hello','ohayou']);

    return (
        <div style={{ border : '2px solid red' , padding : '20px'}}>
            <h1>useToggle</h1>
            <h5>{firstVal ? 'true' : 'false'}</h5>
            <button onClick={togglefirstVal}>Boolean Toggle</button>
            <br/>
            <h5>{strVal}</h5>
            <button onClick={toggleStrVal}>Toggle Hello</button>
        </div>
    )
}