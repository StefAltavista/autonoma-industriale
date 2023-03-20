import React from "react";
import "../../css/header.css";
import Menu from "./Menu";
export default function Header() {
    return (
        <div id="header">
            <img src="/images/logoAutonoma.png" />

            <Menu />
        </div>
    );
}
