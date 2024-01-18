import Link from 'next/link'
import React from 'react'
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { useCartStore } from '@/store';
import { LuShoppingCart } from "react-icons/lu";

export default function Navbar() {

   // const useStore = useCartStore();

    return (
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-400'>
            <Link href={'/'} className='uppercase font-bold text-sm h-10 flex items center mt-4'>KeyMart
            </Link>
            <div className='flex items-center gap-8'>
            <LuShoppingCart  className='h-6 w-6'/>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode='modal'>
                        <button className='border rounded-md bg-slate-600 border-gray-400 text-white px-3 py-2'>
                            Login
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>
        </nav>
    )
}
