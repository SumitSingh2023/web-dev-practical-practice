import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Property from "../pages/Property";
import Carrer from "../pages/Career"
import Resourses from "../pages/Resourses";
import JoinUs from "../pages/JoinUs";
import Contact from "../pages/Contact";
import NewsAndArticle from "../pages/NewsAndArticle";

import { Routes, Route } from "react-router-dom";
import React from "react";
import Loginregister from "../pages/Loginregister";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/property" element={<Property/>}/>
            <Route path="/career" element={<Carrer/>}/>
            <Route path="/resourses" element={<Resourses/>}/>
            <Route path="/joinus" element={<JoinUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/newsAndarticle" element={<NewsAndArticle/>}/>
            <Route path="/login" element={<Loginregister/>}/>
        </Routes>
    )
}


export default AllRoutes

