import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container-fluid tm-content-container'>
      <Home/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
