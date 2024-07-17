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
        mutationKey: [user?.email, token],
        mutationFn: () => createUser(user?.email)
    });

    useEffect(() => {

        const getTokenAndRegister = async () => {
            const res = await getAccessTokenWithPopup({
                authorizationParams: {
                    audience: "http://localhost:8000",
                    scope: "openid profile email"
                }
            })
            localStorage.setItem("access_token", res)
            setUserDetails((prev) => ({ ...prev, token: res }));

            mutate(res)
        }


        isAuthenticated && getTokenAndRegister()
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