"use client"
import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleLogin= async(e)=>{
    e.preventDefault();

    setLoading(true);

    const{error} = await supabase.auth.signInWithPassword({
        email, password
    })

    if(error){
        alert(error.message)
        return
    }
    else{
        alert("Logged In Successfully")
    }
    setLoading(false)
    router.push("/")
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-gray-800 p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              className="block text-sm font-medium text-gray-200"
              htmlFor=""
            >
              Email
            </label>
            <input
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-200"
              htmlFor=""
            >
              Password
            </label>
            <input
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-800 transition cursor-pointer"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in.." : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
};

export default Login;
