'use client'

import Loading from '@/components/Loading';
import useAuthentication from '@/hooks/useAuthentication'
// import { redirect, RedirectType } from 'next/navigation';
import React from 'react'

const Admin = () => {
    const { isLoading, isLoggedIn, currentUser } = useAuthentication();

    // if ( isLoading ) return <Loading />;

    // if ( !( currentUser && currentUser?.role == "admin"  ) ) {
    //     // return redirect("/dashboard", RedirectType.replace);
    // }

    return (
        <div> Admin </div>
    )
}

export default Admin