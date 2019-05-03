import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import App from './App';
import { ApolloProvider } from 'react-apollo-hooks';

const client = new ApolloClient({
    uri: 'https://recipeek-server.herokuapp.com/v1alpha1/graphql',
    headers: { 'x-hasura-admin-secret': 'renevandergijp' }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
