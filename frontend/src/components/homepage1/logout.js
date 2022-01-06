import React from "react"
import "./post.css"



const Logout = ({ updateUser }) => {
    return (
        <div className="homepage">
            <h1 className="heading1">COVID-19 COMMUNICATION BOARD</h1>
            <div className="navbar2"><button className="logout" onClick={() => updateUser({})} >LOGOUT</button>
            </div>
        </div>
    )
}

export default Logout;
