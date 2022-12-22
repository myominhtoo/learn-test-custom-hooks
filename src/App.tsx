import { StorageDemo } from "./hooks/useStorage/StorageDemo";
import UserSubjectDemo from "./hooks/useSubject/UseSubjectDemo";
import { ToggleDemo } from "./hooks/useToggle/ToggleDemo";


function App(){
  return (
    <>
     <h1>Testing Custom Hooks!</h1>
     <br/>
     <ToggleDemo />
     <br/>
     <StorageDemo />
     <br/>
     <UserSubjectDemo />
    </>
  );
}

export default App; 