import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Customers from './components/Customers';
import About from './components/About';
import Footer from './components/Footer';
import WorkCategoryPage from './pages/WorkCategoryPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Customers />
      <About />
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works/:categorySlug" element={<WorkCategoryPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}
