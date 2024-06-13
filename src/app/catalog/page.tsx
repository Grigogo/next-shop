import Catalog from '@/components/ui/catalog/Catalog'
import { ProductService } from '@/services/product.service'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catalog'
}

async function getProducts() {
  const data = await ProductService.getAll()

  return data
}

const CatalogPage = async () => {
  const data = await getProducts()
  return (
    <Catalog isFull products={data} />
  )
}

export default CatalogPage
