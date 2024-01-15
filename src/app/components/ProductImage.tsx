'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { ProductType } from '../types/ProductType';

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}

export default function ProductImage({ product, fill }: ProductImageProps) {
    const [loading, setLoading] = useState(true);

    return fill ? (
        <Image
            src={product.image}
            fill
            alt={product.image}
            className={`object-cover ${loading ? "scale-100 blur-3xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
            onLoad={() => setLoading(false)}
        />
    ) : (
        <Image
            src={product.image}
            width={400}
            height={400}
            alt={product.image}
            className={`object-cover ${loading ? "scale-100 blur-3xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
            onLoad={() => setLoading(false)}
        />
    )
}