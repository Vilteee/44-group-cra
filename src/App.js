// import logo from './logo.svg';
import './App.css';
import './Layout.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;