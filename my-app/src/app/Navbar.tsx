"use client"

import Link from "next/link";

export function Navbar() {
    return (
        <div className="border-b bg-red-500 text-white text-center">
            <div className="container h-12 mx-auto flex justify-between ">
            <Link className="pt-3" href="https://github.com/Cora-chan/">Yue's Github</Link>
            <Link className="pt-3" href="https://main--yueeee-k-portfolio-0001.netlify.app/">Yue's Portfolio</Link>
            </div>
            
        </div>
    )
}

