import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseRefDemo1 } from "../components/UseRefDemo1";
import { UseRefDemo2 } from "../components/UseRefDemo2";
import { Navbar } from "../components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    //remeber dont add / in children router
    children: [
      {
        path: "userefdemo",
        element: <UseRefDemo1 />,
      },
      {
        path: "userefdemo2",
        element: <UseRefDemo2 />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default AppRoutes;
