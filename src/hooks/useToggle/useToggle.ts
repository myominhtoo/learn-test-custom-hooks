import { useEffect, useState } from "react";


export default function useToggle<T1,T2>( initVal : any | Function , toggleVals : [T1,T2] |  undefined | null ) : [ T1 | T2 , () => void]{
    const [ value , setValue ] = useState<T1 | T2>( () => {
        if( typeof initVal == 'function'){
            return initVal();
        }
        return initVal;
    });

    const checkValidVals = () => {
        if( toggleVals!.length < 2 || toggleVals![0] != initVal ){
            throw Error("INVALID USAGE Toggle Values!");
        }
    }

    useEffect(() => {
        if(toggleVals){
            checkValidVals(); 
        }
    } , [] );
    
    function toggle() : void {
       if(toggleVals){
        (value as string).toString() == (toggleVals![0] as string).toString()
        ? setValue( () => {
            return toggleVals![1];
          })
        : setValue(() => {
            return toggleVals![0];
          });
       }else{
         setValue(() => {
            return value ? false as T1 | T2 : true as T1 | T2;
         });
       }
    }
    return [ value , toggle];
}