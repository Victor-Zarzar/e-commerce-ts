import { Metadata } from "next";
import { ProductType } from "./types/Products";

export const metadata: Metadata = {
  title: 'KeyMart E-Commerce',
  description: 'KeyMart E-Commerce - NextJS',
};

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json();
}

export default async function App() {

  const products = await getProducts();

  return (
    <>
      <link rel="shortcut icon" href="./favicon.ico"></link>
      <div className="max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
          {products.map((product: ProductType) => {
            <div key={product.id}>{product.title}

            </div>
          }
          )}

        </div>


      </div>
    </>
  )
}