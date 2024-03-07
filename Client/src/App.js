import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { CreateCompany } from "./pages/CreateCompany/CreateCompany";
import { Home } from "./pages/CreateCompany/Home";
import { CompanyOverview } from "./pages/CreateCompany/CompanyOverview";
import { NoAccessCompanyOverview } from "./pages/CreateCompany/NoAccessCompanyOverview";
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
            path="/NoAccessoverview/:id"
            element={
              <NoAccessCompanyOverview
                FaEdit={FaEdit}
                FaTrash={FaTrash}
                FaSave={FaSave}
                FontAwesomeIcon={FontAwesomeIcon}
                faPlus={faPlus}
              />
            }
          ></Route>
          {/* <Route path="/read/:id" element={<Read />}></Route> */}
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
