import React, {Suspense, lazy} from "react";
import {Spinner} from "react-bootstrap";
import {HashRouter, Routes, Route} from 'react-router-dom';
const CreateCompany = lazy(() => import("./pages/CreateCompany"));
const CompanyList = lazy(() => import("./pages/CompanyList"));

const CommonRoutes = () => {
    return (
        <HashRouter>
            <Suspense fallback={<Spinner animation="border"/>}>
                <Routes>
                    <Route path="/" element={<CreateCompany/>}/>
                    <Route path="/" element={<CompanyList/>}/>
                </Routes>
            </Suspense>
        </HashRouter>
    )
}

export {CommonRoutes};