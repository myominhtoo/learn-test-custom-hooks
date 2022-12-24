import { useEffect, useState } from "react";
import useTabs from "./useTabs"

export default function UseTabDemo(){

    const [ tabs , setTabs ] = useState(() => {
        return (
            [
                {
                    key : 'myanmar',
                    element : <h1>မြန်မာ</h1>
                },
                {
                    key : 'english',
                    element : <h1>English</h1>
                },
                {
                    key : 'japan',
                    element : <h1>nihon</h1>
                }
            ] 
        )
    });
    
    const testTabs = useTabs( tabs );

    useEffect(() => {
        setTimeout( () => {
           setTabs( prevTabs => {
             return [ ...prevTabs , {
                key : 'thailand',
                element : <h1>Thailand</h1>
            }];
           });
        } , 3000 );
    } , [] );
    
    return (
        <>
         <h1>Use Tab Demo</h1>
         <div>
           {
            testTabs.tabs.map((tab,idx) => {
                return <button onClick={() => testTabs.moveTab(tab)} key={idx}>{(tab as string).toUpperCase()}</button>
            })
           }
         </div>
         <div>
            <h3>Current Tab</h3>
            {testTabs.currentElement}
         </div>
        </>
    )
}