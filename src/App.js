
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navigation from './components/Navigation';
import Popup from './components/Popup';
import Browse from './pages/Browse';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path='/browse/:platform' element={<Browse />}></Route>
      </Routes>
      <Popup />
    </BrowserRouter>
  );
}

export default App;
