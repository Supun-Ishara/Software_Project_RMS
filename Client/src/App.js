import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Header } from './Components/Header/Header';
import { CreateCompany} from './pages/CreateCompany/CreateCompany';
import {Home} from './pages/CreateCompany/Home';
import { CompanyOverview} from './pages/CreateCompany/CompanyOverview';
import {Read} from './pages/CreateCompany/Read';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
      <div className="App">
    <HashRouter>
        <Header/>
        <Navbar/>
      <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/create" element={<CreateCompany />}></Route>
       <Route path="/overview/:id" element={<CompanyOverview/>}></Route>
      <Route path="/read/:id" element={<Read />}></Route>
      </Routes>   
      </HashRouter>
      <ToastContainer className="toast-position" position="bottom-righ"></ToastContainer>
      </div>
  );
}


export default App;
