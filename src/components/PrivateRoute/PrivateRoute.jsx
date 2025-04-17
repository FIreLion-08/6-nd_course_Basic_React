import { Navigate, Outlet } from 'react-router-dom'
import { routesPath } from '../../lib/routesPath'

import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

// Убираем из локального значения
// export const PrivateRoute = ({ isAuth }) => {}

export const PrivateRoute = () => {
    const { user } = useContext(UserContext)

    // return isAuth ? <Outlet /> : <Navigate to = {routesPath.LOGIN} />;
    return user ? <Outlet /> : <Navigate to={routesPath.LOGIN} />
}
