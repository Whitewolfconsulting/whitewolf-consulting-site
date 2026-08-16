import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Aria from './pages/Aria'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Spreadsheets from './pages/Spreadsheets'
import ExecutiveReportingSuite from './pages/ExecutiveReportingSuite'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aria" element={<Aria />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/spreadsheets" element={<Spreadsheets />} />
        <Route path="/spreadsheets/executive-reporting-suite" element={<ExecutiveReportingSuite />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
