import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './utils/routes/ProtectedRoute'
import PublicRoute from './utils/routes/PublicRoute'
import Navbar from './components/Navbar'
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
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Navbar />
      <main className="container mx-auto max-w-7xl">
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
    </div>
  )
}

export default App
