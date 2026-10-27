import './index.css';
import Navbar  from './components/Navbar';
import Hero    from './components/Hero';
import Services  from './components/Services';
import Customers from './components/Customers';
import About     from './components/About';
import Footer    from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Customers />
        <About />
      </main>
      <Footer />
    </>
  );
}
