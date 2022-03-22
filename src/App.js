import React from 'react';
import {Routes, Route} from 'react-router-dom'
//Componentes
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon"
import Detail from './components/Details/Details';


function App() {
  return (
    <div>
      <Routes>
       <Route exact path="/" element={<LandingPage/>} />
       <Route exact path="/home" element={<Home/>} />
       <Route exact path="/pokemon" element={<CreatePokemon/>} />
       <Route exact path="/home/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
