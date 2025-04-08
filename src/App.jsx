// Import vendor dependencies
import {BrowserRouter, Routes, Route} from 'react-router';
// Import Local Components
import { DashBoard } from './pages/Dashboard'
// Import Assets

import { Layout } from './pages/Layout';
import { Detail } from './pages/Detail';
import { Galeria } from './pages/Galeria';
import { QuienesSomos } from './pages/QuiensSomos';
import { Carrito } from './pages/Carrito';
import { Adopciones } from './pages/Adopciones';
import {FAQ} from './pages/PreguntasFrecuentes';
import { Noticias } from './pages/Noticias';
import { Contacto } from './pages/Contacto';
import { Favoritos } from './pages/Favoritos';
import { Login} from './pages/Login';
import { Registro } from './pages/Registro';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/galeria" element={<Galeria/>} />
        <Route path="/quienes-somos" element={<QuienesSomos/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/adopciones" element={<Adopciones/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/noticias" element={<Noticias/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/detail/:pokecod" element={<Detail/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
