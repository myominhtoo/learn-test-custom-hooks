import { useEffect , useState } from "react";

export function useCss( cssString : string , updatable : boolean  ) : [] | any {
    const [ str , setStr ] = useState( cssString );
    const [ css , setCss ] = useState<{}>();

    useEffect( () => {
        const splitSemiComma = str.includes(':') && !str.includes(';')
                                ? [str] : str.split(';').filter( str => str != '' );
        setCss( () => {
            return (
                splitSemiComma.map( css => {
                    return css.split(':');
                }).reduce( ( prevVal , curVal ) => {
                    prevVal[ curVal[0] as keyof typeof prevVal ] = curVal[1] as keyof typeof prevVal;
                    return prevVal;
                } , {} )
            )
        });
    } , [ str ] );

    return updatable ? [ css , setStr ] : css;

}
