import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-400'>
            <Link href={'/'} className='uppercase font-bold text-sm h-10 flex items center mt-4'>KeyMart
            </Link>
        </nav>
    )
}
