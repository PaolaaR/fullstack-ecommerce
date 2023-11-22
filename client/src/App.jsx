import { Navigate,Route,Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Catalog } from './components/Catalog';
import { Profile } from './components/Profile';
import { BestSellers} from './components/BestSellers';
import { Checkout } from './components/Checkout';
import{ Footer } from './components/Footer';
import { Product } from './components/Product'
import './App.css';

import ProductState from '../src/context/Product/ProductState'
import UserState from '../src/context/User/UserState'
import LayoutState from '../src/context/Layout/LayoutState'

import AuthRoute from '../src/routes/AuthRoute'
import PrivateRoute from '../src/routes/PrivateRoute'
import PublicRoute from '../src/routes/PublicRoute';



export const App = () => {
  return (
  <>
  <LayoutState>
    <ProductState>
      <UserState>
     <Header /> 
    <Routes>
      <PrivateRoute exact path="/profile" element={<Profile />} />

      <AuthRoute exact path="/Teacupdesign/login" element={<Login />} />
      <AuthRoute exact path="/Teacupdesign/register" element={<Register />} />

      <PublicRoute exact path="/Teacupdesign" element={<Home />} />
      <PublicRoute exact path="/Teacupdesign/catalog" element={<Catalog />} />
      
      <PublicRoute exact path="/Teacupdesign/:productId" element={<Product />} />
      <PublicRoute exact path="/Teacupdesign/contact" element={<Contact />} />
      
      <PublicRoute exact path="/Teacupdesign/bestsellers" element= {BestSellers} />
      <Route path="/Teacupdesign/checkout" element={<Checkout />} />
     
      <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
      <Footer />
      </UserState>
    </ProductState>
  </LayoutState>
  </>
 
  )
}

export default App;


