import { useContext } from "react";
import { AuthContext } from "../auth/context";
import { Navigate } from "react-router-dom";

export const PiublicRouters = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return (!logged)
        
    ? children
    : <Navigate to='/inicio' />;  
};
