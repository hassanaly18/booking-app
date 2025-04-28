"use client";

import { supabase } from "@/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  async function getSession() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <nav className="bg-gray-800 shadow-md py-4 px-8 flex items-center justify-between">
      <Link className="text-2xl font-bold text-blue-500" href="/">
        Home
      </Link>
      <div className="flex items-center gap-6">
        <Link className="text-gray-200 hover:text-blue-500" href="/">
          Home
        </Link>
        {/* <Link href="/">Home</Link>
            <Link href="/">Home</Link> */}

        {!user ? (
          <>
            <Link className="text-gray-200 hover:text-blue-500" href="/login">
              Login
            </Link>
            <Link className="text-gray-200 hover:text-blue-500" href="/signup">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-800 cursor-pointer" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
