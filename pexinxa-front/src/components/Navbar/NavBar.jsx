import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Adicionando useLocation
import { Search, User, ShoppingBag, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { ShoppingCart } from "../ShoppingList/ShoppingCart";
import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const OvalLogo = "/OvalLogo.svg";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook para pegar a localização atual
  const { currentUser, logout } = useAuth();
  const { subtotal, totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="bg-sky-500 py-16 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <img
            src={OvalLogo}
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="hidden md:flex space-x-6 text-white text-md font-medium">
            <Link
              to="/"
              className={`hover:text-sky-200 transition ${
                location.pathname === "/" ? "underline" : ""
              }`}
            >
              Início
            </Link>
            <Link
              to="/products"
              className={`hover:text-sky-200 transition ${
                location.pathname === "/products" ? "underline" : ""
              }`}
            >
              Produtos
            </Link>
            <Link
              to="/about"
              className={`hover:text-sky-200 transition ${
                location.pathname === "/about" ? "underline" : ""
              }`}
            >
              Sobre
            </Link>
          </div>
        </div>

        <div className="flex-1 mx-4 relative hidden md:block">
          <input
            type="text"
            placeholder="Busque por item ou por mercado..."
            className="w-full px-4 py-2 pl-10 rounded-full text-sm bg-white text-gray-600 border border-gray-300 outline-none focus:ring-2 focus:ring-sky-300"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 h-5 w-5" />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center text-white text-md space-x-1">
            <MapPin className="h-4 w-4" />
            <span>Matão - SP</span>
          </div>

          {currentUser ? (
            <>
              <DropDownMenu.Root>
                <DropDownMenu.Trigger asChild>
                  <User className="text-white h-5 w-5 cursor-pointer" />
                </DropDownMenu.Trigger>
                <DropDownMenu.Content className="bg-white p-3 rounded-lg shadow-lg">
                  <DropDownMenu.Label className="text-gray-700">
                    Olá, {currentUser?.displayName || "Visitante"}
                  </DropDownMenu.Label>
                  <DropDownMenu.Separator className="my-2 border-t" />
                  <DropDownMenu.Item
                    className="cursor-pointer text-gray-600 hover:bg-gray-100 p-2 rounded-md"
                    onSelect={() => console.log("Perfil")}
                  >
                    Perfil
                  </DropDownMenu.Item>
                  <DropDownMenu.Item
                    className="cursor-pointer text-gray-600 hover:bg-gray-100 p-2 rounded-md"
                    onSelect={() => console.log("Pedidos")}
                  >
                    Meus Dados
                  </DropDownMenu.Item>
                  <DropDownMenu.Item
                    className="cursor-pointer text-gray-600 hover:bg-gray-100 p-2 rounded-md"
                    onSelect={logout}
                  >
                    Sair
                  </DropDownMenu.Item>
                </DropDownMenu.Content>
              </DropDownMenu.Root>

              <div
                className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold space-x-2 cursor-pointer ${
                  totalItems > 0
                    ? "bg-orange-500 text-white"
                    : "bg-sky-100 text-sky-500"
                }`}
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag
                  className={`h-6 w-6 ${
                    totalItems > 0 ? "text-white" : "text-sky-500"
                  }`}
                />
                <div className="flex flex-col items-start">
                  <span>R$ {subtotal.toFixed(2)}</span>
                  <span className="text-xs">
                    {totalItems} {totalItems === 1 ? "Item" : "Itens"}
                  </span>
                </div>
              </div>

              <ShoppingCart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
              />
            </>
          ) : (
            <>
              <Button
                variant="text"
                className="text-white text-md font-medium underline hover: transition hover:text-sky-200"
                onClick={() => navigate("/register")}
              >
                Criar conta
              </Button>
              <Button
                variant="contained"
                className="text-white text-md font-medium bg-orange-500 hover: transition hover:bg-orange-400"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
