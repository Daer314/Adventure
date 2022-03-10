import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/products' exact element={<Products />}/>
          <Route path='/services' exact element={<Services />}/>
          <Route path='/sign-up' exact element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
