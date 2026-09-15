import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext'
import { SitesProvider } from './context/SitesContext'
import LandingPage from './pages/LandingPage'
import ManageSitesPage from './pages/ManageSitesPage'

export default function App() {

  return (
    <ThemeProvider>
      <SitesProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/Hub" replace />} />
          <Route path="/Hub" element={<LandingPage />} />
          <Route path="/manage" element={<ManageSitesPage />} />
          <Route path="*" element={<Navigate to="/Hub" replace />} />
        </Routes>
      </SitesProvider>
    </ThemeProvider>
  )
}  