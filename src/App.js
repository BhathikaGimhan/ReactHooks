import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import One from './pages/One';
import Two from './pages/Two';
import Home from './pages/home';
import Effect from './pages/Effect';
import RufHooks from './pages/RufHooks';
import LayoutEffect from './pages/Layout';
import ImperativeHandle from './pages/ImperativeHandle';
import Contaxt from './pages/Contaxt';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/One' element={<One />} />
          <Route path='/Two' element={<Two />} />
          <Route path='/Effect' element={<Effect />} />
          <Route path='/RufHooks' element={<RufHooks />} />
          <Route path='/LayoutEffect' element={<LayoutEffect />} />
          <Route path='/ImperativeHandle' element={<ImperativeHandle />} />
          <Route path='/Contaxt' element={<Contaxt />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
