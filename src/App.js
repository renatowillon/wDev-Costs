import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Empresa from './Components/Pages/Empresa';
import Contato from './Components/Pages/Contato';
import NewProject from './Components/Pages/NewProject';

import Container from './Components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Contato">Contato</Link>
        <Link to="/Empresa">Empresa</Link>
        <Link to="/NewProject">Novo Projeto</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Empresa' element={<Empresa/>}></Route>
          <Route exact path='/Contato' element={<Contato/>}></Route>
          <Route exact path='/NewProject' element={<NewProject/>}></Route>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
