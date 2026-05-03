import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseRefDemo1 } from "../components/UseRefDemo1";
import { UseRefDemo2 } from "../components/UseRefDemo2";
import { Navbar } from "../components/Navbar";
import { AdminSideBar } from "../components/AdminSideBar";
import {ApiDemo1} from "../components/api/ApiDemo1"
import { Login } from "../components/Login";
import ProtectedRoutes from "../components/ProtectedRoutes";
import { ProductComponent } from "../components/ProductComponent";
import { BankComponent } from "../components/BankComponent";
import { TailwindDemo1 } from "../components/TailwindDemo1";
import { TailwindDemo2 } from "../components/TailwindDemo2";
import { TaiwindDashboard } from "../components/TaiwindDashboard";

const router = createBrowserRouter([
  {
    path:"/",element:<Login/>
  },
  
  {

    path: "/user",
    element: <Navbar />,
    //remeber dont add / in children router
    children: [
      {
        path:"",
        element:<UseRefDemo1/> //dashboard..
      },
      {
        path: "userefdemo",
        element: <UseRefDemo1 />,
      },
      {
        path:"productcomponent",
        element:<ProductComponent/>
      },
      {
        path:"bank",
        element:<BankComponent/>
      },
      {
        path:"taiwinddemo1",
        element:<TailwindDemo1/>
      },
      {
        path:"taiwinddemo2",
        element:<TailwindDemo2/>
      },
      {
        path:"taiwinddashboard",
        element:<TaiwindDashboard/>
      },
      {
        path: "userefdemo2",
        //element: <UseRefDemo2 />,
        //element:<ProtectedRoutes roles ={["user"]}>
        element:<ProtectedRoutes roles ={["user","admin"]}>
          <UseRefDemo2></UseRefDemo2>
        </ProtectedRoutes>
      },
    ],
  },
  {
    path:"/admin",
    element:<AdminSideBar/>,
    children:[
      {
        path:"",
        //element:<ApiDemo1/>
        element:<ProtectedRoutes roles={["admin"]}>
          <ApiDemo1></ApiDemo1>
        </ProtectedRoutes>
      },
    {
      path:"apidemo1",element:<ApiDemo1></ApiDemo1>
    }
    ]
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default AppRoutes;
