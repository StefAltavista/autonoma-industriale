import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Archive from "./Archive";
import About from "./About";
import Dashboard from "./Dashboard";

export default function App() {
    return (
        <div id="main">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/archive" element={<Archive />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
        </div>
    );
}
