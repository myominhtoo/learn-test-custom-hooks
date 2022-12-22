import { useCallback, useEffect, useRef, useState } from "react";


export function useLocalStorage<T>( key : string , initVal : T ){
    return useStorage<T>( key , initVal , window.localStorage );
}

export function useSessionStorage<T>( key : string , initVal : T  ){
    return useStorage<T>( key , initVal , window.sessionStorage );
}

function useStorage<T>( key : string , initVal : T , targetStoreObject : Storage ){
    const storeRef = useRef(true);
    const [ value , setValue ] = useState<T | undefined>(() => {
        const storedValue = targetStoreObject.getItem( key );
        if( storedValue != null ) return storedValue;

        if( typeof initVal == 'function') return initVal();
        return initVal;
    });

    // preventing recreating with useCallback
    const unset = useCallback(() => {
        storeRef.current = false;
        localStorage.removeItem( key );
        setValue("" as T);
    } , [] );

    useEffect(() => {
       if( !storeRef.current && !localStorage.getItem(key) ) storeRef.current = true;
       if( storeRef.current ) localStorage.setItem( key , JSON.stringify(value));
    } , [key,value,targetStoreObject] );

    return [ value , setValue , unset ] as [ typeof value , typeof setValue , typeof unset ];

}