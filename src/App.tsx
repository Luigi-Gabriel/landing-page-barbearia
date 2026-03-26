import Header from './components/shared/header';
import Hero from './components/shared/hero';
import Footer from './components/shared/footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d0d]">
      
      <Header />

      <main className="grow pt-24"> 
        <Hero />
      </main>

      <Footer />
      
    </div>
  );
}
