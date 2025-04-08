import { useState } from "react"
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

export const Login = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      remember: false
    });
    
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleChange = (e) => {
      const { id, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [id]: type === "checkbox" ? checked : value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log("Login form submitted with:", formData);
        setIsLoading(false);
        alert("Login successful!");
      }, 1000);
    };
  
    return (
      <section className="login-page">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Bienvenido de Nuevo</h1>
            <p className="text-amber-100 mt-1">Inicio de Sesion</p>
          </div>
          
          <form className="p-6 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
                Cuenta
              </label>
              <div className="relative">
                <div className="login-account">
                  <svg className="h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-lg pl-10 p-2.5 w-full focus:ring-amber-500 focus:border-amber-500"
                  placeholder="nombre@petpaws.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-amber-900 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <div className="login-password">
                  <svg className="h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-lg pl-10 p-2.5 w-full focus:ring-amber-500 focus:border-amber-500"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    className="text-amber-600 hover:text-amber-800 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="remember-checkbox"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <label htmlFor="remember" className="ml-2 text-sm text-amber-700">
                  Recuerdame
                </label>
              </div>
              <a href="#" className="forgot-password-link">
                ¿Ha olvidado su Contraseña?
              </a>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="login-button"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Iniciando Sesion...
                </>
              ) : (
                "Inicio"
              )}
            </button>
            
            <div className="text-center mt-4">
              <p className="text-sm text-amber-800">
                ¿Aun no tienes cuenta?{" "}
                <a href="/registro" className="register-link">
                  Registrarse
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  };