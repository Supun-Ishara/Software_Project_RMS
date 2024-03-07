import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { CreateCompany } from "./pages/CreateCompany";
import { Home } from "./pages/Home";
import { CompanyOverview } from "./pages/CompanyOverview";
import { ToastContainer } from "react-toastify";
import { FaInfo, FaEdit, FaTrash, FaSave } from "react-icons/fa"; // Added imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Added import
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // Added import
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                FaInfo={FaInfo}
                FaEdit={FaEdit}
                FaTrash={FaTrash}
                FontAwesomeIcon={FontAwesomeIcon}
                faPlus={faPlus}
              />
            }
          ></Route>
          <Route path="/create" element={<CreateCompany />}></Route>
          <Route
            path="/overview/:id"
            element={
              <CompanyOverview
                FaEdit={FaEdit}
                FaTrash={FaTrash}
                FaSave={FaSave}
                FontAwesomeIcon={FontAwesomeIcon}
                faPlus={faPlus}
              />
            }
          ></Route>
          <Route
            path="/overview"
            element={
              <CompanyOverview
                FaEdit={FaEdit}
                FaTrash={FaTrash}
                FaSave={FaSave}
                FontAwesomeIcon={FontAwesomeIcon}
                faPlus={faPlus}
              />
            }
          ></Route>
        </Routes>
      </HashRouter>
      <ToastContainer
        className="toast-position"
        position="bottom-righ"
      ></ToastContainer>
    </div>
  );
}

export default App;
