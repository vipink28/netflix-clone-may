
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navigation from './components/Navigation';
import Popup from './components/Popup';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
      <Popup />
    </BrowserRouter>
  );
}

export default App;
