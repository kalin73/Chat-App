import React, {useState} from "react";
import "../styles/Login.css";

function Login() {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <input id="username" type="text" placeholder="Username"/>
                <br/>
                <input id="password" type="password" placeholder="Password"/>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;