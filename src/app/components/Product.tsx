import React from 'react'
import { ProductType } from '../types/ProductType'
import ProductImage from './ProductImage'
import { formatPrice } from "../lib/utils"
import { Button } from '@/components/ui/button';
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type ProductProps = {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  return (
    <>
      <div className='flex flex-col shadow-lg h-96 bg-slate-800 text-gray-300 p-4'>
        <div className='relative max-h-60 flex-1'>
          <Card className='max-h-[14rem]'>
            <CardHeader>
              <ProductImage product={product} fill />
            </CardHeader>
            <CardFooter className='mt-48 mx-auto items-center justify-center'>
              <div className='flex mt-4 justify-between font-bold'>
                <p className='w-40 text-white truncate'>{product.name}</p>
                <p className='text-white text-lg'>{formatPrice(product.price)}</p>
              </div>
            </CardFooter>
            <Button className='rounded-md bg-gray-600 text-white px-3.5 py-2.5 text-sm text-center h-10 min-w-[16rem] md:h-10 md:w-[17rem] mx-auto'>Add to Cart</Button>
          </Card>
        </div>
      </div>
    </>
  )
}
