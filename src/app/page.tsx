import Catalog from "@/components/ui/catalog/Catalog";
import Hero from "@/components/ui/hero/Hero";
import { ProductService } from "@/services/product.service";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Home Page description'
}

async function getProducts() {
  const data = await ProductService.getAll()

  return data
}

export default async function Home() {
  const data = await getProducts()
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <Hero />
      <Catalog products={data} isFull={false} />
    </div>
  )
}
