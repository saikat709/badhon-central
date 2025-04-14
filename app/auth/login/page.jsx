'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [phone, setPhone]       = useState("123456789");
  const [password, setPassword] = useState("password");


  const handleLogin = async ( e ) => {
    e.preventDefault();
    try {
        await signIn("credentials", {
            phone: " ",
            password: " ",
            callbackUrl: "/dashboard"
        });
    } catch ( err ){
        console.log(err);
    }

  };

  return (
    <div className="flex justify-center items-center w-[50%] h-[50%] mx-auto">
        <form method="post" onSubmit={handleLogin} className="mt-6 p-3 flex-col flex gap-3">
            <h1 className="text-2xl font-bold text-black/90 ">Login Page... </h1>
            <input
                name="phone"
                type="cell"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-black p-2 border"
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                className="text-black p-2 border"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="rounded-full bg-green-500/50 px-3 py-2">Sign in</button>
        </form>
    </div>
  );
}