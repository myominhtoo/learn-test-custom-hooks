import useEventListener from "./useEventListener";

export default function UseEventListenerDemo(){

    useEventListener( window , 'click' , ( e ) => console.log('h'));

    return (
        <>
         <button>Click</button>
        </>
    )
}