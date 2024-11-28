import { useNavigate } from "react-router-dom";
import { Search, User, ShoppingBag, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import { useAuth } from "../../context/AuthContext";
const OvalLogo = "/OvalLogo.svg";

export const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-sky-500 py-16 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <img
            src={OvalLogo}
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full"
            onClick={() => navigate("/")}
          />
          <div className="hidden md:flex space-x-6 text-white text-sm font-medium">
            <Link to="/" className="hover:text-sky-200 transition">
              Início
            </Link>
            <Link to="/products" className="hover:text-sky-200 transition">
              Produtos
            </Link>
            <Link to="/about" className="hover:text-sky-200 transition">
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
          <div className="flex items-center text-white text-sm space-x-1">
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
                    Pedidos
                  </DropDownMenu.Item>
                  <DropDownMenu.Item
                    className="cursor-pointer text-gray-600 hover:bg-gray-100 p-2 rounded-md"
                    onSelect={logout}
                  >
                    Sair
                  </DropDownMenu.Item>
                </DropDownMenu.Content>
              </DropDownMenu.Root>

              <div className="flex items-center bg-sky-100 px-4 py-2 rounded-full text-sky-500 text-sm font-semibold space-x-2">
                <ShoppingBag className="h-6 w-6 text-sky-500" />
                <div className="flex flex-col items-start">
                  <span>R$ 0,00</span>
                  <span className="text-xs">0 Itens</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                className="text-white text-sm"
                onClick={() => navigate("/register")}
              >
                Criar conta
              </Button>
              <Button
                variant="solid"
                className="text-white text-sm bg-orange-500"
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
