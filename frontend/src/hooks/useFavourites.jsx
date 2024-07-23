import React, { useContext, useEffect, useRef } from 'react'
import UserDetailContext from '../context/userDetailContext'
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { getAllFav } from '../utils/api';

const useFavourites = () => {

    const { userDetails, setUserDetails } = useContext(UserDetailContext);
    const querRef = useRef();
    const { user } = useAuth0();

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: "allFavourites",
        queryFn: () => getAllFav(user?.email, userDetails?.token),
        onSuccess: (data) => setUserDetails((prev) => ({ ...prev, favourites: data })),
        enabled: user !== undefined,
        staleTime: 30000
    });

    queryRef.current = refetch;
    // refetch data = podi;

    useEffect(() => {
        queryRef.current && queryRef.current()
    }, [userDetails?.token])

    return (
        <div>useFavourites</div>
    )
}

export default useFavourites