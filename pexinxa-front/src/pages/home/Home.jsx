import { Navbar } from '/src/components/Navbar.jsx'
import { Footer } from '/src/components/Footer'

export const Home = () => {
  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="container mx-auto p-4">
          <div className="relative bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-orange-500 mb-2">ESQUEÇA FOLHETOS DE MERCADO!</h1>
              <p className="text-xl text-orange-400">compare preços sem sair de casa!</p>
            </div>
            <div className="mt-4">
              <div className="bg-orange-400 text-white p-4 rounded-lg inline-flex items-center">
                <span className="text-3xl font-bold mr-2">30% OFF</span>
                <div>
                  <p className="font-semibold">Produtos de limpeza</p>
                  <p>com aquele desconto!</p>
                </div>
                {/* <Link href="/produtos" className="ml-4 bg-white text-orange-500 px-4 py-2 rounded-full font-bold">
                  Confira
                </Link> */}
              </div>
            </div>
            {/* <Image
              src="/placeholder.svg"
              alt="Fruits and vegetables"
              width={200}
              height={200}
              className="absolute right-0 bottom-0"
            /> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;