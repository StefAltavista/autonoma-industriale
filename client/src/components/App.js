import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import useValidateAccess from "../hooks/useValidateAccess";

import Header from "./Header";
import Home from "./Home";
import Archive from "./Archive";
import About from "./About";
import Label from "./Label";
import Links from "./Links";
import Subscribe from "./Subscribe";
import Unsubscribe from "./Unsubscribe";
import Admin from "./Admin";
import Events from "./Events";
import Mailinglist from "./Mailinglist";
import NewEvent from "./NewEvent";

export default function App() {
    const [access] = useValidateAccess();
    return (
        <div id="main">
            <Header></Header>
            <div id="pageBody">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/archive" element={<Archive />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/label" element={<Label />}></Route>
                    <Route path="/links" element={<Links />}></Route>
                    <Route path="/subscribe" element={<Subscribe />}></Route>
                    <Route
                        path="/unsubscribe"
                        element={<Unsubscribe />}
                    ></Route>
                    <Route path="/admin" element={<Admin />}></Route>
                    <Route path="/events" element={<Events />}></Route>

                    {/* RESERVED ROUTES */}
                    {access && (
                        <>
                            <Route
                                path="/mailinglist"
                                element={<Mailinglist />}
                            ></Route>
                            <Route
                                path="/newevent"
                                element={<NewEvent />}
                            ></Route>
                        </>
                    )}
                </Routes>
            </div>
        </div>
    );
}
