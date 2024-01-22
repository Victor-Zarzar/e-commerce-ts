'use client'
import { useCartStore } from '@/store';
import React from 'react'
import { LuShoppingCart } from 'react-icons/lu';

export default function Cart() {

    const useStore = useCartStore();

    return (
        <div>
            <div className='flex gap-2'>
                <LuShoppingCart className='h-6 w-6' />
                <span className='bg-slate-600 text-sm rounded-full h-5 w-5 flex items-center justify-center absolute left-5 bottom-3'>2</span>
            </div>
        </div>
    )
}
