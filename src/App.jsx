import LandingPage from "./pages/landing.jsx";
import MembershipForm from "./pages/MembershipForm.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { Routes, Route } from 'react-router-dom';

// 1. Import the new component
import ScrollToTop from "./components/ScrollToTop.jsx";

// PrimeReact Theme, Core, and Icons
import "primereact/resources/themes/lara-light-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import './App.css'
import LoginForm from "./admin/LoginForm.jsx";

function App() {
  return (
    <>
      {/* 2. Place it here so it watches all route changes */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<MembershipForm />} />
        <Route path="/about" element={<AboutUs />} />
          <Route path="/admin" element={<LoginForm />} />
      </Routes>
   </>
  )
}

export default App;