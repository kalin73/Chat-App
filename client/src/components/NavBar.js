import React from "react";
import "../styles/NavBar.css";

function NavBar() {
    return (
        <div className="nav">
            <a href="/" className="site-title">ChatAPP</a>
            <ul>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/register">Register</a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;