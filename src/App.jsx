import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { ToastContainer, Zoom } from "react-toastify";
import AppRoutes from "./router/AppRoutes";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const [theme, settheme] = useState("light")
  return (
    <div style={{backgroundColor:theme =="light"?"white":"black",color:theme=="light"?"black":"white"}}>
      <ThemeContext.Provider value={{theme,settheme}}>
        

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />

        <AppRoutes></AppRoutes>

     

      </ThemeContext.Provider>
    </div>
  );
}

export default App;
