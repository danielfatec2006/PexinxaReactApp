import { useState } from 'react'
import { Heart, X, SlidersHorizontal } from "lucide-react"
import { Navbar } from '../../components/Navbar/NavBar'
import { Footer } from '../../components/Footer/Footer'
import BannerCarousel from '../../components/Carousel/BannerCarousel'

export const Product = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <div className="p-4 flex rounded-lg mb-4 mx-full">
        <BannerCarousel />
        </div>
        <div className="flex justify-between items-center mb-4 mt-3 font-montserrat">
          <h2 className="text-3xl font-bold text-gray-700">Produtos</h2>
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center bg-orange-500 text-white px-16 py-2 rounded"
          >
            <SlidersHorizontal className="mr-2" /> Filtro
          </button>
        </div>
        <hr className='flex mb-10'></hr>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <img src="/placeholder.svg" alt="Product" className="w-full h-40 object-cover mb-4" />
              <h3 className="font-bold">Arroz Branco Tipo 1</h3>
              <p className="text-sm text-gray-500">Marca Prato Fino 5kg</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-orange-500">R$ 35,00</span>
                <Heart className="text-gray-400" />
              </div>
              <button className="mt-2 w-full bg-orange-500 text-white py-2 rounded-full font-bold">
                Adicionar
              </button>
            </div>
          ))}
        </div>
      </main>
      
     {isFilterOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
    <div className="bg-white w-80 p-5 h-full overflow-y-auto shadow-lg rounded-l-xl">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-bold text-gray-800">Filtros</h2>
        <button
          onClick={() => setIsFilterOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Botão Limpar Tudo */}
      <button className="text-sky-600 text-sm font-medium hover:underline mb-6">
        Limpar tudo
      </button>

      {/* Categoria */}
      <div className="mb-6">
        <h3 className="font-bold text-sm mb-3 text-gray-800">Categoria</h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 accent-sky-600" />
            <span className="text-gray-700 text-sm">Doces</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 accent-sky-600" />
            <span className="text-gray-700 text-sm">Bebidas</span>
          </label>
        </div>
      </div>

      {/* Departamento */}
      <div className="mb-6">
        <h3 className="font-bold text-sm mb-3 text-gray-800">Departamento</h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 accent-sky-600" />
            <span className="text-gray-700 text-sm">Mercearia</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 accent-sky-600" />
            <span className="text-gray-700 text-sm">Frios</span>
          </label>
        </div>
      </div>

      {/* Mercado */}
      <div className="mb-6">
        <h3 className="font-bold text-sm mb-3 text-gray-800">Mercado</h3>
        <div className="space-y-3">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 accent-sky-600" />
            <span className="text-gray-700 text-sm">Barraca Atacado</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 accent-sky-600" />
            <span className="text-gray-700 text-sm">Amarelinha</span>
          </label>
        </div>
      </div>

      {/* Faixa de Preço */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-sm text-gray-800">Faixa de preço</h3>
          <button className="text-sky-600 text-sm hover:underline">Limpar</button>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 w-24 text-center"
            value="R$ 2,00"
            readOnly
          />
          <span className="text-gray-500 text-sm">até</span>
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 w-24 text-center"
            value="R$ 100,00"
            readOnly
          />
        </div>
        <input
          type="range"
          min="2"
          max="100"
          className="w-full accent-orange-500"
        />
      </div>

      {/* Botão Filtrar */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold text-sm">
        Filtrar
      </button>
    </div>
  </div>
)}

      
      <Footer />
    </div>
  )
}

export default Product;