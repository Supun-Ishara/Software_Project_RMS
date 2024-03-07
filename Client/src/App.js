import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { CreateCompany } from "./pages/company/CreateCompany";
import { Home } from "./pages/company/Home";
import { CompanyOverview } from "./pages/company/CompanyOverview";
import { NoAccessCompanyOverview } from "./pages/company/NoAccessCompanyOverview";
import { ToastContainer } from "react-toastify";
import { FaInfo, FaEdit, FaTrash, FaSave } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
