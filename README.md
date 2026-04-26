# TechnoMed 

Plataforma E-commerce para eventos de música techno con temática *Cyberpunk*, construida con un enfoque *mobile-first* y arquitectura de rutas protegidas mediante autenticación en tiempo real.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 📋 Información General

- **Nombre del Proyecto:** TechnoMed 
- **Autor:** Miguel Ángel Tabares Cuadros 
- **Repositorio:** [https://github.com/MiguelTabares/technoMed.git](https://github.com/MiguelTabares/technoMed.git)
- **Deploy (GitHub Pages):** *(Pendiente)*

## 🚀 Estado Actual del Proyecto (Features Implementadas)

El aplicativo actualmente cuenta con un flujo completo de interfaces y seguridad:

### 1. Autenticación Integral (Firebase Auth)
- **Registro de Entidades (`Register.jsx`):** Creación de nuevos usuarios con validación de credenciales a través del SDK oficial de Firebase.
- **Acceso a la Red (`Login.jsx`):** Autenticación de sesiones persistentes.
- **Desconexión Segura:** Destrucción de la llave digital (token) a través de un botón nativo inyectado en el *Hero Section* del Home.

### 2. Seguridad (Protected Routes)
- El aplicativo posee un sistema de enrutamiento privativo. Componentes sensibles como el Carrito (`TicketCart`), Checkout (`CheckoutPreview`) y el Home están envueltos en un componente `<ProtectedRoute>`.
- **Observer en Tiempo Real:** `App.jsx` utiliza `onAuthStateChanged` para escuchar continuamente el estatus del usuario y bloquear intrusiones mediante redirecciones automáticas (`Navigate to="/login"`).

### 3. Interfaz de Usuario (UI / UX)
- **Estética Cyberpunk:** Utilización de paletas de alto contraste (Verde Neón sobre Gris Oscuro), tipografías técnicas (`Space Grotesk`, `Epilogue`), y bordes afilados (`rounded-none`).
- **Mobile-First & Responsivo:** Implementación de cuadrículas (`grid-cols-1 md:grid-cols-12`) y Flexbox en todas las vistas. El *Navbar* cuenta con un menú "Hamburguesa" exclusivo para dispositivos móviles.

### 4. Carrito de Compras (Front-end)
- Persistencia de elementos en el carrito mediante el `localStorage` del navegador.
- Lógica de adición, remoción, alteración de cantidad y cálculo de comisiones (Fees) y subtotal automático.

## 🛠 Instalación y Ejecución Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MiguelTabares/technoMed.git
   ```
2. Instala las dependencias del ecosistema Node:
   ```bash
   cd technomed
   npm install
   ```
   *Nota:* Asegúrate de que `firebase` se instale correctamente, ya que es el core de la autenticación.
3. Configura tus variables de entorno (Opcional si ya están quemadas en `firebase.js`). Reemplaza el bloque `firebaseConfig` en `src/backend/firebase.js` con las llaves de tu proyecto de Firebase Console si despliegas un entorno nuevo.
4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 📂 Arquitectura de Directorios

```text
src/
├── backend/            # Inicialización e Instancias de Firebase (firebase.js, auth.js)
├── components/         # Componentes reutilizables (Navbar, ProtectedRoute)
├── pages/              # Vistas completas de React-Router
│   ├── Login.jsx       # Interfaz de Ingreso
│   ├── Register.jsx    # Interfaz de Registro
│   ├── Home.jsx        # Dashboard principal / Grilla de Eventos
│   ├── EventDetails    # Vista en detalle del boleto
│   ├── TicketCart      # Carrito de Compras
│   └── CheckoutPreview # Pasarela de pago simulada
├── App.jsx             # Raíz de ruteo y estado global de Autenticación
└── main.jsx            # Punto de montaje e inyección de TailwindCSS
```

---
*Documentación generada automáticamente conforme a las actualizaciones técnicas del sprint.*