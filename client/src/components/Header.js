import React from "react";
import { Link } from "react-router-dom";
import "../../css/header.css";
import "../../css/menu.css";

export default function Header() {
    return (
        <div id="header">
            <Link to="/">
                <img src="/images/logoAutonoma.png" />
            </Link>

            <div id="menu">
                <Link to="/events">Events</Link>
                <Link to="/label">Label</Link>
                <Link to="/archive">Archive</Link>
                <Link to="/about">About</Link>
                <Link to="/links">Links</Link>
                <Link to="/admin">Private</Link>
            </div>
        </div>
    );
}
