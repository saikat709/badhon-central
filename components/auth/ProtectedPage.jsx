"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '../Loading';

const ProtectedPage = ({ children, redirectTo = '/auth/login' }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
        router.replace(redirectTo);
        }
    }, [ status, router, redirectTo ]);

    if ( status === 'loading') {
        return <div className="text-center py-1 text-gray-600 my-12"> <Loading/> </div>;
    }

    if (status === 'authenticated') {
        return <>{children}</>;
    }

    return null;
};

export default ProtectedPage;