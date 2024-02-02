import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import SideNav from './components/SideNav';


function App() {
  return (
    <>
      <BrowserRouter>
      <SideNav/>
        <Routes>
          <Route path='/' element={<HomePage />}  />
        </Routes>
      </BrowserRouter>
    </>
   )
}

export default App
