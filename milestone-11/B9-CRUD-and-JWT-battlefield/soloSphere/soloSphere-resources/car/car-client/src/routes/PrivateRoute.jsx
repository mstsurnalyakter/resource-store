import React from 'react'
import PropTypes from 'prop-types'
import useContextData from '../hooks/useContextData'
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContextData();
    const location = useLocation();
    if (loading) {
        return <h1 className='text-center font-bold text-5xl'>Loading.................</h1>
    }
 if (user?.email) {
    return children;
 }

 return <Navigate state={location?.pathname} to={'/login'} />

}

PrivateRoute.propTypes = {
    children:PropTypes.node
}

export default PrivateRoute