import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import { useState } from "react";
import Popup from "./components/Popup";

function App() {
  const [ buttonPopup, setButtonPopup ] = useState(true);

  return (buttonPopup ? (
    <div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My portfolio page is under constraction. Sorry for lack of best user experience.</h3>
      </Popup>
    </div> 
  ) : (
    <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    </div>
  )


    
  );
}

export default App;
