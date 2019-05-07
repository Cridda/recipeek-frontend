import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/organisms/Navigation';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';

const { Content } = Layout;

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Layout>
                    <Navigation />
                    <Content>
                        <Switch>
                            <Route path="/recipe/:id" component={Recipe} />
                            <Route path="/recipe" component={Recipes} />
                            <Route path="/" component={Navigation} />
                        </Switch>
                    </Content>
                </Layout>
            </Router>
        </>
    );
};

export default App;
