import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import About from '../pages/About'
import Property from '../pages/Property'
import Career from '../pages/Career'
import Resources from '../pages/Resources'
import Join from '../pages/Join'
import Contact from '../pages/Contact'
import Article from '../pages/Article'
import Jaipur from '../pages/property/Jaipur'
import Haridwar from '../pages/property/Haridwar'
import Khatushyamji from '../pages/property/Khatushyamji'
import Phulera from "../pages/property/Phulera"


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="properties" element={<Property />} />
                <Route path="career" element={<Career />} />
                <Route path="resourses" element={<Resources />} />
                <Route path="joinus" element={<Join />} />
                <Route path="contact" element={<Contact />} />
                <Route path="article" element={<Article />} />
                <Route path="property/jaipur" element={<Jaipur/>}/>
                <Route path="property/haridwar" element={<Haridwar/>}/>
                <Route path="property/khatushyamji" element={<Khatushyamji/>}/>
                <Route path="property/phulera" element={<Phulera/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes