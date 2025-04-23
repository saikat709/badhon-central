'use client'

import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const UserDashBoard = () => {
    const { data: session } = useSession();

    const logout = ()=>{
        signOut({callbackUrl: "/auth/login"})
    }

    return (
        <div className='h-full bg-inherit flex flex-col items-center justify-center gap-4'>
            <h1 className='text-3xl font-bold text-crimson'>Welcome to your Dashboard</h1>
            <button className='bg-red-600 px-3 py-2 rounded-lg' onClick={logout}>Logout </button>
            <h1 className='text-3xl font-bold text-crimson'>Welcome to your Dashboard</h1>
            <button className='bg-red-600 px-3 py-2 rounded-lg' onClick={logout}>Logout </button>
            <h1 className='text-3xl font-bold text-crimson'>Welcome to your Dashboard</h1>
            <button className='bg-red-600 px-3 py-2 rounded-lg' onClick={logout}>Logout </button>
            <h1 className='text-3xl font-bold text-crimson'>Welcome to your Dashboard</h1>
            <button className='bg-red-600 px-3 py-2 rounded-lg' onClick={logout}>Logout </button>
            <h1 className='text-3xl font-bold text-crimson'>Welcome to your Dashboard</h1>
            <button className='bg-red-600 px-3 py-2 rounded-lg' onClick={logout}>Logout </button>
            <h1 className='text-3xl font-bold text-crimson'>Welcome to your Dashboard</h1>
            <button className='bg-red-600 px-3 py-2 rounded-lg' onClick={logout}>Logout </button>
        </div>
    )
}

export default UserDashBoard
