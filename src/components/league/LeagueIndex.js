import React from 'react';
import '../../stylesheets/style2.css';

const LeagueIndex = () => {
    return (
        <div className="login-page">
            <div className="title">
                <img id="logo" src="./images/Football-PNG-Image.png" alt="" />
                <h1>League of ballers</h1>
            </div>
            <div className="footballer">
                <img
                    id="footballer"
                    src="./images/—Pngtree—man playing football_4493289.png"
                    alt=""
                />
                <div className="buttons">
                    <button type="button" className="button">
                        <a href="./create_league.html">Create New League</a>
                    </button>
                    <button type="button" className="button">
                        <a href="./enter_league.html">Enter League</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LeagueIndex;