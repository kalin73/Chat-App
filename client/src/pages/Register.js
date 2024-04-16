import React from "react";
import "../styles/Register.css";

function Register() {
    return (
        <div className="register-form">
            <h2>Register</h2>
            <form>
                <input type="text" placeholder="Username" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <button type="submit">Email</button>
            </form>
        </div>
    );
}

export default Register;