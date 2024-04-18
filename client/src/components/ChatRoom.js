import React, { useState } from "react";
import Login from "../pages/Login";

function ChatRoom() {
    const [userData, setUserData] = useState({
        username: "",
        recievername: "",
        connected: false,
        message: ""
    });
    return (
        <div className="container">
            {userData.connected ?
                <div></div>
                :
                <Login />
            }
        </div>
    );
}

export default ChatRoom;