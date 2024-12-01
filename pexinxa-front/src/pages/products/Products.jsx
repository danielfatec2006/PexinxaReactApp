import { useState, useEffect } from "react";
import { Heart, X, ListPlus, SlidersHorizontal, ArrowUp } from "lucide-react";
import { Navbar } from "../../components/Navbar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import BannerCarousel from "../../components/Carousel/BannerCarousel";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import products  from "../../hooks/useProductData" 
import MarketMap from "../../components/MarketMap/MarketMap.jsx";

export const Product = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { currentUser } = useAuth();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (!currentUser) {
      setShowLoginModal(true);
      return;
    }
    addItem(product);
  };
  const handleScroll = () => {
    setShowScrollToTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <BannerCarousel />
        <div className="flex justify-between items-center mb-4 mt-3 font-montserrat">
          <h2 className="text-3xl font-bold text-gray-700">Produtos</h2>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center bg-orange-500 text-white px-16 py-2 rounded"
          >
            <SlidersHorizontal className="mr-2" /> Filtro
          </button>
        </div>
        <hr className="flex mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-300 p-4 rounded-lg shadow flex flex-col items-center"
            >
              <div className="w-full h-48 flex items-center justify-center mb-4 font-montserrat">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-auto h-full object-contain"
                />
              </div>
              <p className="font-medium text-center text-gray-800">
                {product.name}
              </p>
              <div className="flex items-center mt-3 mb-4">
                <img
                  src={product.market.logo}
                  alt={product.market.name}
                  className="w-6 h-6 mr-2"
                />
                <span className="text-sm font-semibold text-gray-600">
                  {product.market.name}
                </span>
              </div>
              <div className="flex justify-between items-center w-full mb-4">
                <span className="text-3xl pl-20 font-extrabold text-orange-500">
                  R$ {product.price.toFixed(2)}
                </span>
                <Heart className="text-red-500 mr-20 cursor-pointer" />
              </div>
              <button
                className="mt-2 w-full bg-orange-500 text-white py-2 rounded-full font-bold flex items-center justify-center hover:bg-orange-600 transition-all hover:-translate-y-1"
                onClick={() => handleAddToCart(product)}
              >
                <ListPlus className="mr-2" /> Adicionar
              </button>
            </div>
          ))}
        </div>
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-80 p-5 h-full overflow-y-auto shadow-lg rounded-l-xl border border-gray-300">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Filtros</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between items-center mb-6">
                <button
                  // onClick={handleClearFilters} // Lógica para limpar os filtros
                  className="text-sm text-blue-600 hover:underline focus:outline-none"
                >
                  Limpar tudo
                </button>
              </div>
              <div className="mb-5">
                <h3 className="font-semibold text-gray-700 mb-2">Categoria</h3>
                <div className="space-y-2">
                  <label className="flex items-center text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 border-gray-300 rounded focus:ring-orange-500"
                    />
                    Doces
                  </label>
                  <label className="flex items-center text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 border-gray-300 rounded focus:ring-orange-500"
                    />
                    Bebidas
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-semibold text-gray-700 mb-2">
                  Departamento
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 border-gray-300 rounded focus:ring-orange-500"
                    />
                    Mercearia
                  </label>
                  <label className="flex items-center text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 border-gray-300 rounded focus:ring-orange-500"
                    />
                    Frios
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-semibold text-gray-700 mb-2">Mercado</h3>
                <div className="space-y-2">
                  <label className="flex items-center text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 border-gray-300 rounded focus:ring-orange-500"
                    />
                    Barraca Atacado
                  </label>
                  <label className="flex items-center text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 border-gray-300 rounded focus:ring-orange-500"
                    />
                    Amarelinha
                  </label>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">
                  Faixa de preço
                </h3>
                <div>
                  <div className="flex justify-between text-gray-600 text-sm mb-2">
                    <span>R$ 2,00</span>
                    <span>R$ 100,00</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="100"
                    className="w-full cursor-pointer accent-orange-500"
                    // onChange={handlePriceRangeChange} // Lógica para alterar a faixa de preço
                  />
                  <button
                    className="mt-2 text-sm text-blue-600 hover:underline focus:outline-none"
                    // onClick={handleClearPriceRange} // Lógica para limpar a faixa de preço
                  >
                    Limpar 
                  </button>
                </div>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold text-sm shadow-md border-2 border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
                Filtrar
              </button>
            </div>
          </div>
        )}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-80 p-6 rounded-lg shadow-lg relative">
              <button
                className="absolute top-3 right-3 text-orange-500 hover:text-gray-700"
                onClick={() => setShowLoginModal(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-lg font-bold text-gray-800 font-montserrat">
                Você parece não estar logado!
              </h2>
              <p className="mt-4 text-sm text-gray-600 font-montserrat font-medium">
                Entre em sua conta ou cadastre-se para começar a economizar!
              </p>
              <div className="mt-6 flex justify-between">
                <button
                  className="bg-orange-500 text-white px-12 py-2 rounded hover:bg-orange-600 font-montserrat font-semibold"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="bg-sky-500 text-white px-8 py-2 rounded hover:bg-sky-600 font-montserrat font-semibold"
                  onClick={() => navigate("/register")}
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
      <Footer />
      <section className="w-full bg-sky-50 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 font-montserrat">
              Não sabe qual mercado ir?
            </h2>
            <p className="text-xl text-gray-600 mt-2 font-montserrat">
              Veja o mais próximo de você!
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <div className="h-[500px] w-full">
              <MarketMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
