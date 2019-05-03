import React from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { useRecipesQuery } from './generated/graphql';

const recipeQuery = gql`
    query Recipes {
        recipe {
            id
            description
            name
            photo_url
            url
            recipe_ingredients {
                ingredient {
                    name
                    unit
                }
                amount
            }
        }
    }
`;

const App: React.FC = () => {
    const { data, error, loading } = useRecipesQuery();
    //nice
    if (error || loading) {
        return null;
    }
    if (data) {
        console.log(data);
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
