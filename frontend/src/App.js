import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage'
import BookSlot from './components/BookSlot';


function App() {
  return (
    <>
    <BrowserRouter  >
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/bookslot' element={<BookSlot />} />
        <Route path='/:name' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
