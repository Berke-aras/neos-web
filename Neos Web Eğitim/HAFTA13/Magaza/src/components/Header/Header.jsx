import React from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
    return (
        <header className="header">
            <h1>Trend Mağaza</h1>
            <HeaderCartButton />
        </header>
    );
}

export default Header;
