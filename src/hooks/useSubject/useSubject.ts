import { useEffect, useRef, useState } from "react";

type SubjectSubscrber = {
    id : number,
    depFunc : ( arg : any | undefined ) => void
}

export default function useSubject<T>( initVal : any | Function ){
   const  [ subject , setSubject ] = useState<T>( () => {
        if( typeof initVal == 'function' ) return initVal();
        return initVal;
   });
   const subscribersRef = useRef<SubjectSubscrber[] | undefined>([]);

   const subscribe = ( depFunc : ( val : any) => void ) : (() => void) | undefined =>  {
     const maxId =  Math.max(...subscribersRef.current?.map( subscriber => {
        return subscriber.id;
     })!);
     
     const subscriber = { depFunc , id :  maxId < 0  ? 1 : maxId + 1 };
     if( subscribersRef.current?.some( sub  => sub.depFunc == subscriber.depFunc )) return;
     subscribersRef.current?.push(subscriber);
     return () => {
        subscribersRef.current = subscribersRef.current?.filter( sub => sub.id != subscriber.id );
     }
   }

   const next = ( nextVal : any| ( () => T ) ) => {
     setSubject(() => {
        let value = undefined as any;
        if( typeof nextVal == 'function' ){
            value = nextVal();
        }
        value = nextVal;
        subscribersRef.current?.forEach( subscriber => {
            subscriber.depFunc( value! );
        })
        return value;
     });
   }

   return { 
     value : subject,
     subscribe ,
     next
   }

}