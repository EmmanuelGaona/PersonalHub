import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext'
import LandingPage from './pages/LandingPage'

export default function App() {

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/Hub" replace />} />
        <Route path="/Hub" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/Hub" replace />} />
      </Routes>
    </ThemeProvider>
  )
}  