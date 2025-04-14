"use client"

import { useSession } from "next-auth/react";

const { redirect, RedirectType } = require("next/navigation")


const ProtectedPage = ({children}) => {
    const { data: session } = useSession();

    if ( !session?.user ){
        return redirect("/auth/login", RedirectType.replace );
    }

    return children;
}


export default ProtectedPage;