import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './utils/routes/ProtectedRoute'
import PublicRoute from './utils/routes/PublicRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import EventDetails from './pages/EventDetails'
import TicketCart from './pages/TicketCart'
import CheckoutPreview from './pages/CheckoutPreview'
import OrderConfirmed from './pages/OrderConfirmed'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-1">
        <Routes>
          {/* Rutas Públicas (Solo accesibles si NO estás autenticado) */}
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="/register" element={<PublicRoute element={<Register />} />} />

          {/* Rutas Protegidas (Requieren autenticación) */}
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/about" element={<ProtectedRoute element={<About />} />} />
          <Route path="/event-details" element={<ProtectedRoute element={<EventDetails />} />} />
          <Route path="/cart" element={<ProtectedRoute element={<TicketCart />} />} />
          <Route path="/checkout" element={<ProtectedRoute element={<CheckoutPreview />} />} />
          <Route path="/order-confirmed" element={<ProtectedRoute element={<OrderConfirmed />} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
