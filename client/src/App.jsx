import { Navigate,Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Checkout } from './routes/Checkout';
import { Home } from './routes/Home';
import { Contact } from './routes/Contact';
import { Login } from './routes/Login';
import { Catalogo } from './routes/Catalogo';
import { MiPerfil } from './routes/MiPerfil';
import { TazonUno } from './routes/TazonUno';
import { TazonDos } from './routes/TazonDos';
import { TazonTres } from './routes/TazonTres';
import { TazonCuatro } from './routes/TazonCuatro';
import { TazonCinco } from './routes/TazonCinco';
import { TazonSeis } from './routes/TazonSeis';
import { TazonSiete } from './routes/TazonSiete';
import { TazonOcho } from './routes/TazonOcho';


export const App = () => {
  return (
  <>
    <NavBar/>
    <Routes>
      <Route path="/my-ecommerce/" element={<Home />} />
      <Route path="/my-ecommerce/catalogo" element={<Catalogo />} />
      <Route path="/my-ecommerce/catalogo/:tazonUno" element={<TazonUno />} />
      <Route path="/my-ecommerce/catalogo/:tazonDos" element={<TazonDos />} />
      <Route path="/my-ecommerce/catalogo/:tazonTres" element={<TazonTres />} />
      <Route path="/my-ecommerce/catalogo/:tazonCuatro" element={<TazonCuatro />} />
      <Route path="/my-ecommerce/catalogo/:tazonCinco" element={<TazonCinco />} />
      <Route path="/my-ecommerce/catalogo/:tazonSeis" element={<TazonSeis />} />
      <Route path="/my-ecommerce/catalogo/:tazonSiete" element={<TazonSiete />} />
      <Route path="/my-ecommerce/catalogo/:tazonOcho" element={<TazonOcho />} />
      <Route path="/my-ecommerce/login" element={<Login />} />
      <Route path="/my-ecommerce/login/:miperfil" element={<MiPerfil />} />
      <Route path="/my-ecommerce/contact" element={<Contact />} />
      <Route path="/my-ecommerce/checkout" element={<Checkout />} />
      
      <Route path="/*" element={<Navigate to='/' />} />
    </Routes>

  </>

  )
}

export default App;


