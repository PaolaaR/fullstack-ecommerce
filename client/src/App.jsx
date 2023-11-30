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
import UserState from '../src/context/User/UserState'
import LayoutState from '../src/context/Layout/LayoutState'

import { AuthRoute } from './components/Routes/AuthRoute';
import { PublicRoute } from './components/Routes/PublicRoute';
import { PrivateRoute } from './components/Routes/PrivateRoute';



export const App = () => {
  return (
  <>
  <LayoutState>
    <ProductState>
      <UserState>
        <Header/>
      <Routes>
     
    
      <Route path="/Teacupdesign/profile" element={<PrivateRoute component= {Profile} />} />

      <Route path="/Teacupdesign/login" element={<AuthRoute component= {Login} />} />
      <Route path="/Teacupdesign/register" element={<AuthRoute component={Register} />} />

      <Route path="/Teacupdesign" element={<PublicRoute component={Home} />} />
      <Route path="/Teacupdesign/catalog" element={<PublicRoute component={Catalog} />} />
      
      <Route path="/Teacupdesign/product/:productId" element={<PublicRoute component ={Product} />} />
      <Route path="/Teacupdesign/contact" element={<PublicRoute component={Contact} />} />
      
      <Route path="/Teacupdesign/bestsellers" element= {<PublicRoute component={BestSellers}/>} />
      <Route path="/Teacupdesign/checkout" element={<PublicRoute component={Checkout} />} />
     
      <Route path="/*" element={<Navigate to='/Teacupdesign' />} />

      </Routes>

      <Footer />
      </UserState>
    </ProductState>
  </LayoutState>
  </>
 
  )
}

export default App;


