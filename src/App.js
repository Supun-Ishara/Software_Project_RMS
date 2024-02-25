import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { Header } from './Components/Header/Header';
import { CreateCompany} from './pages/CreateCompany/CreateCompany';
import {Home} from './pages/CreateCompany/Home';
import { CompanyOverview} from './pages/CreateCompany/CompanyOverview';
//import {Update} from './pages/CreateCompany/Update';
import {Read} from './pages/CreateCompany/Read';
import { ToastContainer } from 'react-toastify';
// import { Provider } from 'react-redux';
// import Store from './store/Store';

function App() {
  return (
    // <Provider store={Store}>
      <div className="App">
    <HashRouter>
        <Header/>
        <Navbar/>
      <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/create" element={<CreateCompany />}></Route>
       <Route path="/overview/:id" element={<CompanyOverview/>}></Route>
       {/* <Route path="/update/:code" element={<Update />}></Route> */}
      <Route path="/read/:id" element={<Read />}></Route>
      </Routes>   
      </HashRouter>
      <ToastContainer className="toast-position" position="bottom-righ"></ToastContainer>
      </div>
      // </Provider>
  );
}


export default App;
