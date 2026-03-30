import Header from './components/shared/header';
import Hero from './components/shared/hero';
import Footer from './components/shared/footer';
// Removemos a importação do ServiceCard daqui
import { Services } from './components/shared/services';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d0d]">
      
      <Header />

      <main> 
        <Hero />
        
        {/* Removemos o <ServiceCard /> que estava solto aqui */}
        
        <Services />
      </main>

      <Footer />
      
    </div>
  );
}