"use client"

import Link from "next/link";

export function Footer() {
    return (
        <div className="border-b h-12 bg-red-500 text-white text-center">
             <p>Copyright © 2024 Yue Kang</p>
             <Link className="underline" href="mailto:kangyue9323@gmail.com">Mail to me</Link>     
        </div>
    )
}