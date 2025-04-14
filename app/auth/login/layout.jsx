import ProtectedPageInverse from '@/components/auth/ProtectedPageInverse'
import React from 'react'

const layout = ({children}) => {
  return (
    <ProtectedPageInverse>
        {children }
    </ProtectedPageInverse>
  )
}

export default layout