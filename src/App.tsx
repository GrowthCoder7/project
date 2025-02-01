import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactSection from './pages/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import About from './pages/About';
import AdminRoute from './components/admin/AdminRoute';
import AdminDashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import Login from './pages/Login';
import { ShopProvider } from './Context/ShopContext';
import ProductPage from './pages/ProductPage';
import Terms from './pages/Terms';
import Shipping from './pages/Shipping';
import Refund from './pages/Refund';
import Privacy from './pages/Privacy';

export default function App() {
  return (
    <ShopProvider>
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white/95">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path='/contact' element={<ContactSection/>}></Route>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/refund" element={<Refund />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/products" element={<AdminRoute><AdminProducts /></AdminRoute>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </ShopProvider>
  );
}