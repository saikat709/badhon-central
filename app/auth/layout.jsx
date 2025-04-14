'use client'
import useMounted from '@/hooks/useMounted'

const layout = ({children}) => {

    const isMounted = useMounted();
    if ( !isMounted ) return null;

    return (
        <div>
            {children}
        </div>
    )
}

export default layout
