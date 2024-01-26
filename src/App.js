import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Empresa from './Components/Pages/Empresa';
import Contato from './Components/Pages/Contato';
import NewProject from './Components/Pages/NewProject';
import Projetos from './Components/Pages/Projetos';
import Teste from './Components/teste/teste';
import Login from './Components/Pages/login';

import Container from './Components/layout/Container';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Empresa' element={<Empresa/>}></Route>
          <Route exact path='/Contato' element={<Contato/>}></Route>
          <Route exact path='/Projetos' element={<Projetos/>}></Route>
          <Route exact path='/NewProject' element={<NewProject/>}></Route>
          <Route exact path='/Teste' element={<Teste/>}></Route>
          <Route exact path='/Login' element={<Login />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
    
  );
}

export default App;
