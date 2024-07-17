import React, { useContext, useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailContext from '../context/userDetailContext';
import { createUser } from '../utils/api';
import { useMutation } from "react-query"

const Layout = () => {

    const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
    const { setUserDetails } = useContext(UserDetailContext)
    const { mutate } = useMutation({
        mutationKey: [user?.email],
        mutationFn: () => createUser(user?.email)
    });

    useEffect(() => {
        isAuthenticated && mutate()
    }, [isAuthenticated])

    return (
        <>
            <div>
                <Header />
                <Outlet />
            </div>
        </>
    );
};

export default Layout;