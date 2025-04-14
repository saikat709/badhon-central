import ProtectedPage from '@/components/auth/ProtectedPage'
import React from 'react'

const DashBoard = ({children}) => {

    return (
        <div>
            <ProtectedPage>
                {children}
            </ProtectedPage>
        </div>
    )
}

export default DashBoard
