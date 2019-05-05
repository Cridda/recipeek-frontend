import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import Navigation from './components/organisms/Navigation';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/recipe/:id" component={Recipe} />
                    <Route path="/recipe" component={Recipes} />
                    <Route path="/" component={Navigation} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
