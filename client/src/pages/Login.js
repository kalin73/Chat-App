import React, { useState } from "react";
import "../styles/Login.css";

function Login() {
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    function handelrUsername(event) {
        const { value } = event.target;
        setData({ ...data, "username": value });
    }

    function handelrPassword(event) {
        const { value } = event.target;
        setData({ ...data, "password": value });
    }

    async function registerUser() {
        
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <input id="username" type="text" placeholder="Username" value={data.username} onChange={handelrUsername} />
                <br />
                <input id="password" type="password" placeholder="Password" value={data.password} onChange={handelrPassword} />
                <br />
                <button type="submit" onClick={registerUser}>Login</button>
            </form>
        </div>
    );
}

export default Login;