import Link from 'next/link'
import React from 'react'
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image';
import Cart from './Cart';

export default function Navbar() {

    return (
        <nav className='fixed top-0 w-full h-20 flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-400'>
            <div className="md:flex items-center justify-between py-5 md:px-10 px-6">
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <Image
                        src="/e-commerce.svg"
                        alt="ecommerce"
                        width={25}
                        height={20}
                        priority
                        className="h-8 w-7 md:w-8 md:h-8 lg:w-7 lg:h-7 ml-1"
                    />
                    <Link href={'/'} className='uppercase font-bold text-sm h-10 flex mt-4'>KeyMart
                    </Link>
                </div>
            </div>
            <div className='flex items-center gap-8 relative'>
                <Cart />
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
