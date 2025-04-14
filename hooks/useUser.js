'use client'

const { useSession } = require("next-auth/react")

// error 

const useUser = () => {
    const { data: session } = useSession();
    return session?.user;
};


export default useUser;