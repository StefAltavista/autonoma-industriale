import React from "react";
import { Link } from "react-router-dom";
import "../../css/menu.css";
export default function Menu() {
    return (
        <div id="menu">
            <Link to="">Next Events</Link>
            <Link to="">Label</Link>
            <Link to="">Archive</Link>
            <Link to="">About</Link>
        </div>
    );
}
