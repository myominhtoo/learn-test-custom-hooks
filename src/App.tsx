import { StorageDemo } from "./hooks/useStorage/StorageDemo";
import { ToggleDemo } from "./hooks/useToggle/ToggleDemo";


function App(){
  return (
    <>
     <h1>Testing Custom Hooks!</h1>
     <br/>
     <ToggleDemo />
     <br/>
     <StorageDemo />
    </>
  );
}

export default App; 