'use client'
import ProtectedPage from '@/components/auth/ProtectedPage'
import useMounted from '@/hooks/useMounted'
import React, { useEffect, useState } from 'react'

const layout = ({children}) => {

    // TODO: Check user type if amin or moderator

    return (
        <div>
            <ProtectedPage>
                {children}
            </ProtectedPage>
        </div>
    )
}

export default layout
