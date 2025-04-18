'use client';

import Loading from "@/components/Loading";
import useAuthentication from "@/hooks/useAuthentication";
import { signIn } from "next-auth/react";
import { redirect, RedirectType } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  const [phone, setPhone]       = useState("123456789");
  const [password, setPassword] = useState("password");

  const { isLoading, isLoggedIn } = useAuthentication();


  if ( isLoading ) return <Loading />;
  if ( isLoggedIn ) return redirect("/dashboard", RedirectType.replace);


  const handleLogin = async ( e ) => {
    e.preventDefault();
    try {
        await signIn("credentials", {
            phone: phone,
            password: password,
            callbackUrl: "/dashboard"
        });
    } catch ( err ){
        console.log(err);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

        <form className="space-y-4" method="post" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+880 1XXXXXXXXX"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="flex gap-2 mt-2">
            <p> Do not have a account? </p> <a href="/auth/register" className="text-blue-700/70"> Register </a>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        <button
          className="flex items-center justify-center w-full border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-300"
        >
          <FcGoogle className="mr-2 text-xl" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}