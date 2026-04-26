import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authFirebase } from '../backend/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const auth = async (userEmail, userPassword) => {
    try {
      await signInWithEmailAndPassword(authFirebase, userEmail, userPassword);
      alert("Autenticado");
      navigate("/");
    } catch (error) {
      console.error("Firebase Auth Error:", error.code, error.message);
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    auth(email, password);
  };
  return (
    <div className="flex min-h-[calc(100vh-64px)] w-full flex-col lg:flex-row">
      {/* Left side - Decorative Atmosphere */}
      <div className="relative hidden overflow-hidden bg-surface-container-lowest lg:flex lg:w-1/2">
        <img
          alt="Atmosphere"
          className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity grayscale contrast-125"
          src="https://images.unsplash.com/photo-1558317751-bc3ed6f85f72?q=80&w=2874&auto=format&fit=crop"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background to-transparent opacity-90"></div>
        <div className="scanlines pointer-events-none absolute inset-0 z-20 mix-blend-overlay"></div>
        
        <div className="relative z-30 flex h-full w-full flex-col justify-between p-10">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-4xl text-primary-container">biotech</span>
            <span className="font-space text-2xl font-bold tracking-widest uppercase">Techno_Med</span>
          </div>
          
          <div className="max-w-lg mb-10">
            <h1 className="font-space text-7xl font-bold text-primary-container drop-shadow-neon uppercase leading-none">
              ENTER<br />THE GRID
            </h1>
            <p className="mt-6 font-epilogue text-lg text-on-surface-variant max-w-md">
              Secure neural handshake required. Authenticate to access exclusive biomechanical enhancements and nocturnal event frequencies.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="relative flex w-full items-center justify-center p-6 lg:w-1/2">
        <div className="absolute inset-0 z-0 bg-surface-container-low/50 backdrop-blur-3xl lg:hidden"></div>
        
        <div className="relative z-10 w-full max-w-[440px] border border-outline/20 bg-surface p-8 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] sm:p-10">
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <span className="material-symbols-outlined text-3xl text-primary-container">biotech</span>
            <span className="font-space text-2xl font-bold tracking-widest uppercase">Techno_Med</span>
          </div>
          
          <h2 className="font-space text-5xl font-bold text-white mb-2">AUTH</h2>
          <p className="mb-10 font-epilogue text-on-surface-variant">
            Initialize secure connection to the mainframe.
          </p>
          
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
              <label className="font-space text-xs font-semibold tracking-widest uppercase text-on-surface" htmlFor="email">
                Identity // Email
              </label>
              <div className="group relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary-container">
                  terminal
                </span>
                <input
                  className="w-full border border-outline bg-surface-container-lowest py-4 pl-12 pr-4 font-epilogue text-white transition-all focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container focus:shadow-[0_0_15px_rgba(183,247,0,0.3)] placeholder:text-gray-600"
                  id="email"
                  placeholder="user@network.sys"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-space text-xs font-semibold tracking-widest uppercase text-on-surface" htmlFor="password">
                Encryption Key // Password
              </label>
              <div className="group relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary-container">
                  key
                </span>
                <input
                  className="w-full border border-outline bg-surface-container-lowest py-4 pl-12 pr-4 font-epilogue text-white transition-all focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container focus:shadow-[0_0_15px_rgba(183,247,0,0.3)] placeholder:text-gray-600"
                  id="password"
                  placeholder="••••••••••••"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary-container hover:scale-110 transition-all duration-300" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <label className="group flex cursor-pointer items-center gap-3">
                <div className="relative flex h-5 w-5 items-center justify-center border border-outline bg-surface-container-lowest transition-colors group-hover:border-primary-container">
                  <input className="peer sr-only" type="checkbox" />
                  <span className="material-symbols-outlined absolute text-[16px] text-primary-container opacity-0 transition-opacity peer-checked:opacity-100">
                    check
                  </span>
                </div>
                <span className="font-epilogue text-on-surface-variant transition-colors group-hover:text-white">Maintain Link</span>
              </label>
              <a className="font-epilogue text-primary-container underline decoration-primary-container/30 underline-offset-4 hover:text-white transition-all" href="#">
                Reset Key?
              </a>
            </div>
            
            <button className="group mt-8 flex w-full items-center justify-center gap-3 bg-primary-container py-5 font-space text-xs font-bold tracking-widest uppercase text-on-primary-container transition-all hover:bg-lime-400 hover:shadow-[0_0_20px_rgba(183,247,0,0.5)] active:scale-[0.98]" type="submit">
              Execute Login
              <span className="material-symbols-outlined transition-all duration-300 group-hover:translate-x-3 group-hover:text-white">arrow_forward</span>
            </button>
          </form>
          
          <div className="my-8 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-outline/20"></div>
            <span className="font-space text-[10px] tracking-widest uppercase text-on-surface-variant">External Protocol</span>
            <div className="h-[1px] flex-1 bg-outline/20"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 border-2 border-secondary py-4 font-space text-xs font-bold tracking-widest uppercase text-secondary transition-all hover:bg-secondary/10 hover:shadow-[0_0_15px_rgba(233,179,255,0.3)]" type="button">
              <span className="material-symbols-outlined text-[20px]">fingerprint</span>
              Biometric
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-secondary py-4 font-space text-xs font-bold tracking-widest uppercase text-secondary transition-all hover:bg-secondary/10 hover:shadow-[0_0_15px_rgba(233,179,255,0.3)]" type="button">
              <span className="material-symbols-outlined text-[20px]">tag</span>
              Token
            </button>
          </div>
          
          <div className="mt-10 text-center">
            <p className="font-epilogue text-on-surface-variant">
              Unregistered entity? 
              <Link to="/register" className="ml-2 border-b border-primary-container pb-1 font-bold tracking-wide text-white transition-colors hover:text-primary-container">
                INITIALIZE NEW_USER
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
