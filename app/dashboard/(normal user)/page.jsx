'use client'

import { useSession } from 'next-auth/react'
import React from 'react'

const UserDashBoard = () => {
    const { data: session } = useSession();
    if ( !session ) return <> </>;

    return (
        <div>
            UserDashBoard: <span className='text-success font-bold'>{ session?.user?.name || " 404-NotFound" }</span>
        </div>
    )
}

export default UserDashBoard
