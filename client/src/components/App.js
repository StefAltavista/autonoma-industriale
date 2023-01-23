import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";

export default function App() {
    return (
        <div id="main">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </div>
    );
}
