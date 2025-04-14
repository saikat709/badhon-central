'use client'

import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const UserDashBoard = () => {
    const { data: session } = useSession();

    const logout = ()=>{
        signOut({callbackUrl: "/auth/login"})
    }

    return (
        <div>
            <p>
                UserDashBoard:
                <span className='text-success font-bold'>{ session?.user?.name || " 404-NotFound" }</span>
            </p>
            <button className='bg-red-600 px-3 py-2 rounded-lg' onClick={logout}>Logout </button>
        </div>
    )
}

export default UserDashBoard
