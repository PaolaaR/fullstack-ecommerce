import { Navigate,Route, Router, Routes } from 'react-router-dom';
import { Header } from './routes/Header';
import { Home } from './routes/Home';
import { Contact } from './routes/Contact';
import { Login } from './routes/Login';
import { Register } from './routes/Register';
import { Catalog } from './routes/Catalog';
import { Profile } from './routes/Profile';
import { Product } from './routes/Product';
import { Checkout } from './routes/Checkout';
import{ Footer } from './routes/Footer';
import './App.css';



export const App = () => {
  return (
  <>
     <Header /> 
    <Routes>
      <Route path="/Teacupdesign" element={<Home />} />
      <Route path="/Teacupdesign/catalog" element={<Catalog />} />
      <Route path="/Teacupdesign/login" element={<Login />} />
      <Route path="/Teacupdesign/login/:profile" element={<Profile />} />
      <Route path="/Teacupdesign/contact" element={<Contact />} />
      <Route path="/Teacupdesign/register" element={<Register />} />
      <Route path="/Teacupdesign/product" element={<Product />} />
      <Route path="/Teacupdesign/checkout" element={<Checkout />} />
     
      <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
    <Product />
      <Footer />
  </>
 
  )
}

export default App;


