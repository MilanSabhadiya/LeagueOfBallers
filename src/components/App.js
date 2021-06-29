import React from 'react';
import Login from './Login';
import { Router, Route } from 'react-router-dom';
import LeagueIndex from './league/LeagueIndex';
import history from './history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div className="ui container">
                    <Route path="/" exact component={Login} ></Route>
                    <Route path="/league/new" exact component={LeagueIndex}></Route>
                </div>
            </Router>
        </div>
    )
}

export default App;