import { NavLink } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile based on screen width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close menu when clicking a navigation link on mobile
  const handleNavLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  // Navigation links data
  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/noticias', label: 'Noticias' },
    { to: '/quienes-somos', label: '¿Quienes Somos?' },
    { to: '/galeria', label: 'Galeria' },
    { to: '/adopciones', label: 'Adopciones' },
    { to: '/contacto', label: 'Contacto' },
    { to: '/faq', label: 'Preguntas Frecuentes' }
  ];

  return (
    <header className="header-container">
      {/* Main Header Top */}
      <div className="main-header-top">
        {/* Logo + Search */}
        <div className="logo-search">
          <NavLink 
            to="/" 
            className="brand-title"
          >
            PetPawsHn
          </NavLink>

          <div className="search-input">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="placeholder-style"
            />
            <button className="search-button-color">
              <FiSearch className="search-icon-color" />
            </button>
          </div>
        </div>

        {/* User + Cart */}
        <div className="user-cart-container">
          <NavLink 
            to="/login" 
            className="flex items-center gap-2 group min-w-[70px] sm:min-w-0"
          >
            <div className="relative p-2 rounded-full group-hover:bg-gray-100 transition-colors">
              <FiUser className="text-xl group-hover:text-amber-600 transition-colors" />
            </div>
            <span className="nav-link-responsive">Cuenta</span>
          </NavLink>

          <NavLink 
            to="/favoritos" 
            className="flex items-center gap-2 group min-w-[90px] sm:min-w-0"
          >
            <div className="relative p-2 rounded-full group-hover:bg-gray-100 transition-colors">
              <FiHeart className="text-xl group-hover:text-amber-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white font-bold w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </div>
            <span className="nav-link-responsive">Favoritos</span>
          </NavLink>

          <NavLink 
            to="/carrito" 
            className="flex items-center gap-2 group min-w-[80px] sm:min-w-0"
          >
            <div className="relative p-2 rounded-full group-hover:bg-gray-100 transition-colors">
              <FiShoppingCart className="text-xl group-hover:text-amber-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white font-bold w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <span className="nav-link-responsive">Carrito</span>
          </NavLink>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="navigation-bar-gradient relative">
        <nav className="navigation-items-container">
          {/* Burger Menu Button - Only visible on mobile */}
          {isMobile && (
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-amber-50 transition-colors absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <FiX className="text-3xl text-amber-600" />
              ) : (
                <FiMenu className="text-3xl text-amber-600" />
              )}
            </button>
          )}
          
          <div className="navigation-items-display">
            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="bg-lime-50 rounded-md px-4 py-1 hover:bg-amber-50 hover:shadow-md transform hover:scale-[1.02] transition-all duration-300 animate-fade-in w-full">
                <ul className="flex items-center justify-between w-full">
                  {navLinks.map(({ to, label }) => (
                    <li key={to} className="flex-1 text-center">
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `group flex items-center justify-center px-3 py-1 text-sm font-medium w-full ${
                            isActive
                              ? 'text-amber-600'
                              : 'text-gray-700 group-hover:text-amber-600'
                          } transition-all duration-200 relative transform group-hover:-translate-y-0.5`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {label}
                            {isActive && (
                              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600"></span>
                            )}
                          </>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Mobile Navigation Menu - Increased z-index to 50 */}
            {isMobile && (
              <div className={`
                fixed left-0 top-0 z-50 h-screen w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
              `}>
                <div className="p-5 bg-amber-50 flex justify-between items-center">
                  <span className="font-bold text-amber-600 text-xl">Menú</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 rounded-full hover:bg-amber-100"
                  >
                    <FiX className="text-2xl text-gray-700" />
                  </button>
                </div>
                <ul className="py-3">
                  {navLinks.map(({ to, label }) => (
                    <li key={to} className="border-b border-gray-100 last:border-b-0">
                      <NavLink
                        to={to}
                        onClick={handleNavLinkClick}
                        className={({ isActive }) =>
                          `block px-6 py-4 text-base font-medium ${
                            isActive
                              ? 'text-amber-600 bg-amber-50'
                              : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                          } transition-colors`
                        }
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
        
        {/* Overlay when mobile menu is open - Updated z-index to 40 */}
        {isMobile && isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};