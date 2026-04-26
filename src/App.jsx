import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { authFirebase } from './backend/auth'
import ProtectedRoute from './components/ProtectedRoute'
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
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Escucha el estado de autenticación en Firebase
    const unsubscribe = onAuthStateChanged(authFirebase, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    // Limpia el listener al desmontar el componente
    return () => unsubscribe()
  }, [])

  // Muestra una pantalla de carga mientras Firebase verifica el token
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="font-space text-primary-container text-2xl font-bold tracking-widest uppercase animate-pulse">
          Validating Connection...
        </div>
        <div className="w-48 h-1 bg-surface-container-highest mt-4 overflow-hidden">
          <div className="w-1/2 h-full bg-primary-container shadow-[0_0_15px_#b7f700] animate-[ping_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Navbar />
      <main className="container mx-auto max-w-7xl">
        <Routes>
          {/* Rutas Públicas (Solo accesibles sin sesión o para iniciar sesión) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rutas Protegidas (Requieren autenticación) */}
          <Route path="/" element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          } />
          
          <Route path="/about" element={
            <ProtectedRoute user={user}>
              <About />
            </ProtectedRoute>
          } />
          
          <Route path="/event-details" element={
            <ProtectedRoute user={user}>
              <EventDetails />
            </ProtectedRoute>
          } />
          
          <Route path="/cart" element={
            <ProtectedRoute user={user}>
              <TicketCart />
            </ProtectedRoute>
          } />
          
          <Route path="/checkout" element={
            <ProtectedRoute user={user}>
              <CheckoutPreview />
            </ProtectedRoute>
          } />
          
          <Route path="/order-confirmed" element={
            <ProtectedRoute user={user}>
              <OrderConfirmed />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </div>
  )
}

export default App
