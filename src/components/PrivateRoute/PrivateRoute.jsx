import { Navigate, Outlet } from "react-router-dom";
import { routesPath } from "../../lib/routesPath";


export const PrivateRoute = ({ isAuth }) => {
    return isAuth ? <Outlet /> : <Navigate to = {routesPath.LOGIN} />;
}
