import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HighScores from './pages/HighScores';
import Home from './pages/Home';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/game" component={Game} />
                <Route path="/highScores" component={HighScores} />
                <Route path="/gameOver" component={GameOver} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
