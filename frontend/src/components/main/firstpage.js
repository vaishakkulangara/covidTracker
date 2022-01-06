import React from 'react';
import './firstpage.css';
import { useHistory } from "react-router-dom"
function Firstpage() {
    const history = useHistory()
    return (
        <>
            <div>
                <div className="motohd">
                    <h1 className="motohead">Be INFORMED</h1>
                    <h1 className="motohead">Be PREPARED</h1>
                    <h1 className="motohead">Be SMART</h1>
                    <h1 className="motohead">Be SAFE</h1>
                    <h1 className="motohead">Be READY to fight</h1>
                    <h1 className="moto1">#COVID-19</h1>
                </div>
            </div>
            <div className="navbar1">
                <button className="button1" onClick={() => {
                    history.push("/login")
                }}>LOGIN</button>

                <button button className="button1" onClick={() => {
                    history.push("/register")
                }}>SIGN UP</button>

                <button button className="button1" onClick={() => {
                    history.push("/homepage")
                }}>COVID DASHBOARD</button>
                  <button button className="button1" onClick={() => {
                    history.push("/")
                }}>HOME</button>

            </div>
        </>

    )
}
export default Firstpage;