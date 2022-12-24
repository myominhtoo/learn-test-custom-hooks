import React, {  useEffect, useMemo, useState } from 'react'

type Tab = {
    key : string | number,
    element : React.ReactNode
}

export default function useTabs( tabs : Tab [] ){   
    const [ currentElement , setCurrentElement ] = useState<React.ReactNode>(null);

    const memorizedTabs = useMemo(() => {
        console.log('memo tabs')
        return tabs.map( tab => tab.key );
    } , [tabs]);

    const moveTab = ( tabKey : string | number ) => {
        setCurrentElement( prevCurrentElement => {
            const targetElement = tabs.find( tab => tab.key == tabKey );
            return targetElement ? targetElement.element : prevCurrentElement; 
        });
    }

    useEffect(() =>{
        setCurrentElement(() => {
            return tabs[0].element;
        });
    } , [] );
    
    return {
        tabs : memorizedTabs ,
        currentElement,
        moveTab
    }

}