import React from 'react';
import GoogleAuth from './GoogleAuth';
import '../stylesheets/style2.css';

const Login = () => {
    return (
        <div>
            <div className="login-page">
                <div className="title">
                    <img id="logo" src={`${process.env.PUBLIC_URL}/Football-PNG-Image.png`} alt="App_Logo" />
                    <h1>League of ballers</h1>
                </div>
                <div className="footballer">
                    <img id="footballer" src={`${process.env.PUBLIC_URL}/v2_15.png`} alt="Player_Logo" />
                    <GoogleAuth />
                </div>
            </div>
        </div>
    )
}

export default Login;