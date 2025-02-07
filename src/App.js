import './App.css';
import { HeaderSection, PortfolioSection, TestimonySection, ContactSection, FooterSection } from './components';

function App() {
  return (
    <main className='dark:bg-slate-900 dark:text-white'>
      <HeaderSection />
      <PortfolioSection />
      <TestimonySection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

export default App;
