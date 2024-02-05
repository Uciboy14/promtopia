"use client"

import Link from "next/link";
import Image from "next/image";
import logo from "@public/assets/images/logo.svg"
import profile from "@public/assets/images/profile.png"
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Nav = () => {
    const isUSerLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image 
            src={logo}
            alt="Promtopia Logo"
            width={30}
            height={30}
            className="object-contain"
            />
            <p className="logo_text">Promptopia</p>
        </Link>

        {/* Mobile Navigation */}
        <div className="sm:flex hidden">
            {isUSerLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
                <Link href="/create-prompt"
                className="black_btn">
                    Create Post
                </Link>

                <button type="button" onClick={signOut} 
                className="outline_btn">
                    Sign Out
                </button>

                <Link href="/profile">
                    <Image
                    src={profile}
                    alt="Promtopia Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                     />
                </Link>
            </div>
            ): (
                <>
                </>
            )}
        </div>
    </nav>
  )
}

export default Nav;