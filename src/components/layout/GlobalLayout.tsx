import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
