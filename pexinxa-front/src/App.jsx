import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/products/Products';
import LoginForm from './pages/login/Login';
import RegisterForm from './pages/register/Register';
import CookieCard from './components/Cookie/CookieCard';
import About from './pages/about/About'
import { CartProvider } from './context/CartContext';
import GoogleMaps from './components/Map/GoogleMaps';
import { ThemeProvider, useTheme } from '../src/context/ThemeContext';
import { GlobalStyle, Button } from '../src/styles/Theme';
import ShoppingPlanner from './components/ShoppingPlanner/ShoppingPlanner';
import { motion } from 'framer-motion';

function App() {
  const { isDark, toggleTheme } = useTheme();

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <CartProvider>
      <GlobalStyle isDark={isDark} />
      <Router>
        <motion.div className="flex flex-col min-h-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }} > {/* Fade-in animation for the entire app */}
          <header>
            {/* Animated button */}
            <motion.button variants={buttonVariants}
                           whileHover="hover"
                           className={`button ${isDark ? 'dark-mode' : ''}`} // Add styling for dark mode
                           onClick={toggleTheme}>
             {isDark ? (
                <>
                  <div style={{display: 'inline-flex', alignItems: 'center', margin:'10px'}}>
                    <p>Ativar Light Mode</p>
                    <img style={{ width: '40px',}} src='https://img.icons8.com/m_rounded/512/FFFFFF/sun.png'></img>
                  </div>
                  
                </>
              ) : (
                <>
                <div style={{ display: 'inline-flex', alignItems: 'center', margin:'10px'}}>
                  <p>Ativar Dark Mode</p>
                <img style={{ width: '40px'}} src='https://cdn2.iconfinder.com/data/icons/rpg-basic-set-2/512/night-512.png'></img>
                </div>
                  
                </>
              )}
            </motion.button>
          </header>
          <motion.main className="flex-grow"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ duration: 0.5, delay: 0.2 }}> {/* Slightly delayed fade-in */}
            <Routes>
              <Route path="/shopping/panner" element={<ShoppingPlanner />} />
              <Route path="/googlemaps/market/localization" element={<GoogleMaps />} />
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Product />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </motion.main>
          <CookieCard />
        </motion.div>
      </Router>
    </CartProvider>
  );
};

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;