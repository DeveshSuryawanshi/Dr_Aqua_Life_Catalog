import GlobalLayout from '@/components/layout/GlobalLayout'
import Hero from './home/components/Hero'
import ProductsOverview from './home/components/ProductsOverview'

export default function Home() {
  return (
    <GlobalLayout>
      <Hero/>
      <ProductsOverview/>
    </GlobalLayout>
  )
}
