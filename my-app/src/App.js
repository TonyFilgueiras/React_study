import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home"
import Projects from "./pages/projetos"
import Contact from "./pages/contato"
import Company from "./pages/empresa"
import Header from './components/Header'
import Footer from './components/Footer'
import CreateProject from './pages/criar_projeto'

function App() {
  return (
    <Router>
      <Header/>






      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/criar_projeto' element={<CreateProject/>}/>
        <Route path = '/projetos' element={<Projects/>}/>
        <Route path = '/contato' element={<Contact/>}/>
        <Route path = '/empresa' element={<Company/>}/>
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
