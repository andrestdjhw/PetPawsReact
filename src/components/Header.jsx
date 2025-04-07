import { NavLink } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiHeart } from 'react-icons/fi';

export const Header = () => {
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
      <div className="navigation-bar-gradient">
        <nav className="navigation-items-container">
          <div className="navigation-items-display">
            <div className="bg-amber-200 rounded-md px-4 py-1  hover:bg-amber-50 hover:shadow-md transform hover:scale-[1.02] transition-all duration-300 animate-fade-in w-full">
              <ul className="flex items-center justify-between w-full">
                {[
                  { to: '/', label: 'Inicio' },
                  { to: '/noticias', label: 'Noticias' },
                  { to: '/quienes-somos', label: '¿Quienes Somos?'},
                  { to: '/galeria', label: 'Galeria' },
                  { to: '/adopciones', label: 'Adopciones' },
                  { to: '/contacto', label: 'Contacto' },
                  { to: '/faq', label: 'Preguntas Frecuentes' }
                ].map(({ to, label }) => (
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
          </div>
        </nav>
      </div>
    </header>
  );
};