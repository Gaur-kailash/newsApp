import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className="App bg-gray-950">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home key="general"/>}/>
      <Route exact path='/:country/:category' element={<Home key="India"/>}/>
      <Route path='/:country' element={<Home key="Specific" />}/>

      <Route path='/About' element={<About/>}/>
      <Route path='/watchlist' element={<Watchlist/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
