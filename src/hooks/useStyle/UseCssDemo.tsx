import { useCss } from "./useStyle"

export default function UseCssDemo(){
    
    const [ css , setCss ] = useCss("color:red;backgroundColor:blue", true );
    const cssTwo = useCss("color:blue",false);
    return (
        <>
         <button onClick={() => {
            setCss(() => "color:black");
         }} >Change</button>
         <h1 style={css}>Use Css Demo</h1>
         <h1 style={cssTwo}>useCss</h1>
        </>
    )
}