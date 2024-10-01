import { useState } from 'react'
import { Heart, X, SlidersHorizontal } from "lucide-react"
import { Navbar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

export const Product = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-orange-400 text-white p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold">Quer montar sua lista de compras mas não sabe por onde começar?</h2>
          <button className="mt-2 bg-white text-orange-500 px-4 py-2 rounded-full font-bold">
            Monte já
          </button>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Produtos</h2>
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center bg-orange-500 text-white px-4 py-2 rounded"
          >
            <SlidersHorizontal className="mr-2" /> Filtro
          </button>
        </div>
        
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
          <div className="bg-white w-80 p-4 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filtros</h2>
              <button onClick={() => setIsFilterOpen(false)} className="text-gray-500">
                <X />
              </button>
            </div>
            <button className="text-sky-500 mb-4">Limpar tudo</button>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">Categoria</h3>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="doces" className="mr-2" />
                <label htmlFor="doces">Doces</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="bebidas" className="mr-2" />
                <label htmlFor="bebidas">Bebidas</label>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">Departamento</h3>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="mercearia" className="mr-2" />
                <label htmlFor="mercearia">Mercearia</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="frios" className="mr-2" />
                <label htmlFor="frios">Frios</label>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">Mercado</h3>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="barracaAtacado" className="mr-2" />
                <label htmlFor="barracaAtacado">Barraca Atacado</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="amarelinha" className="mr-2" />
                <label htmlFor="amarelinha">Amarelinha</label>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">Faixa de preço</h3>
              <div className="flex justify-between mb-2">
                <span>R$ 2,00</span>
                <span>R$ 100,00</span>
              </div>
              <input type="range" min="2" max="100" className="w-full" />
              <button className="text-sky-500 text-sm">Limpar</button>
            </div>
            
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-bold">
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