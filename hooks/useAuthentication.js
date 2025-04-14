'use client'

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // start as true
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') {

        setIsLoading(true);

    } else if (status === 'unauthenticated') {

      setIsLoggedIn(false);
      setCurrentUser(null);
      setIsLoading(false);

    } else if (status === 'authenticated') {

      setIsLoggedIn(true);
      setCurrentUser(session?.user || null);
      setIsLoading(false);

    }
  }, [status, session]);

  return { isLoggedIn, currentUser, isLoading };
};

export default useAuthentication;
