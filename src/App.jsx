import { Routes, Route } from 'react-router-dom'
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/cart" element={<TicketCart />} />
          <Route path="/checkout" element={<CheckoutPreview />} />
          <Route path="/order-confirmed" element={<OrderConfirmed />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
