import { useNavigate } from 'react-router-dom';
import { Search, User, ShoppingBag, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from "./ui/Button";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useAuth } from '../context/AuthContext'; 
import OvalLogo from '../assets/OvalLogo.svg';

export const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-sky-500 p-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={OvalLogo} alt="Logo" width={60} height={60} className="rounded-full" />
          <div className="flex space-x-4 text-white text-sm">
            <Link to="/" className="hover:underline">Início</Link>
            <Link to="/products" className="hover:underline">Produtos</Link>
            <Link to="/sobre" className="hover:underline">Sobre</Link>
          </div>
        </div>
        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Busque por item ou por mercado..."
              className="w-full p-2 pl-10 rounded-full text-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-white">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">Mateus - SP</span>
          </div>

          {currentUser ? (
            <>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <User className="text-white">Menu</User>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="bg-white p-2 rounded-md shadow-lg">
                  <DropdownMenu.Label>Olá, {currentUser.displayName}</DropdownMenu.Label>
                  <DropdownMenu.Separator className="my-1" />
                  <DropdownMenu.Item onSelect={() => console.log('Perfil')}>
                    Perfil
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => console.log('Pedidos')}>
                    Pedidos
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={logout}>
                    Sair
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              <div className="relative">
                <ShoppingBag className="text-white" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  R$ 30,00
                </span>
              </div>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                className="text-white text-sm"
                onClick={() => navigate('/register')}
              >
                Criar conta
              </Button>

              <Button
                variant="ghost"
                className="text-white text-sm"
                onClick={() => navigate('/login')}
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
