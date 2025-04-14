"use client"

import { useSession } from "next-auth/react";

const { default: useUser } = require("@/hooks/useUser")
const { redirect, RedirectType } = require("next/navigation")


const ProtectedPageInverse = ({children}) => {
    const { data: session } = useSession();

    if ( session?.user ){
        return redirect("/dashboard/", RedirectType.replace );
    }

    return children;
}


export default ProtectedPageInverse;