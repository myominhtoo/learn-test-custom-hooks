import { useCallback, useEffect, useRef } from "react";
import useSubject from "./useSubject"

export default function UserSubjectDemo(){

    const subject1 = useSubject<string>("hello");
    const unsubscriber1 = useRef<Function | undefined>();

    useEffect(() => {
        unsubscriber1.current = subject1.subscribe( nextVal => {
            console.log(nextVal)
        });
        subject1.subscribe( ( nextVal ) => {
            console.log( (nextVal as string).toUpperCase())
        });
    } , [] );
   
    return (
        <>
         <h1>useSubject demo</h1>
         <input
          type="text"
          onChange={ e => subject1.next(e.target.value) }
          value={subject1.value}
         />
         <ul>
            <button onClick={() => unsubscriber1.current!() }>Unsubscriber one</button>
            <h3>Subject one!</h3>
            {subject1.value}
         </ul>
        </>
    )
}