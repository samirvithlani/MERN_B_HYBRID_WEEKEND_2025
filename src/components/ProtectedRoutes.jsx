import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children,roles}) => {
    console.log("roles.",roles) //["user"]

  const [token, settoken] = useState()
  const [isLoading, setisLoading] = useState(true);
  const [role, setrole] = useState(null);//user

  useEffect(() => {
    console.log(localStorage.getItem("token"))
    settoken(localStorage.getItem("token")) //check login.. set...
    setrole(localStorage.getItem("role")) //check login we have set role as user for now
    setisLoading(false)
    
  }, []);

  
  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (!token) {
    return <Navigate to="/"></Navigate>; // / check appRoutes  / we have use for login --> /login
  }
  if(!roles.includes(role)){
    return <Navigate to="/"></Navigate>
  }
  
  
  return children;
};
export default ProtectedRoutes;
