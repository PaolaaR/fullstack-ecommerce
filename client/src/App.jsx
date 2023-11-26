import { Navigate,Route,Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Catalog } from './components/Catalog';
import { Profile } from './components/Profile';
import { BestSellers} from './components/BestSellers';
import { Checkout } from './components/Checkout';
import{ Footer } from './components/Footer';
import { Product } from './components/Product'
import './App.css';

import ProductState from '../src/context/Product/ProductState'
import LayoutState from '../src/context/Layout/LayoutState'
import { UserProvider } from './context/User/UserContext';



export const App = () => {
  return (
  <>
  <LayoutState>
    <ProductState>
      <UserProvider>
     <Header /> 
    <Routes>
      <Route path="/profile" element={<Profile />} />

      <Route path="/Teacupdesign/login" element={<Login />} />
      <Route path="/Teacupdesign/register" element={<Register />} />

      <Route path="/Teacupdesign" element={<Home />} />
      <Route path="/Teacupdesign/catalog" element={<Catalog />} />
      
      <Route path="/Teacupdesign/product/:productId" element={<Product />} />
      <Route path="/Teacupdesign/contact" element={<Contact />} />
      
      <Route path="/Teacupdesign/bestsellers" element= {BestSellers} />
      <Route path="/Teacupdesign/checkout" element={<Checkout />} />
     
      <Route path="/*" element={<Navigate to='/Teacupdesign' />} />
    </Routes>
      <Footer />
      </UserProvider>
    </ProductState>
  </LayoutState>
  </>
 
  )
}

export default App;


