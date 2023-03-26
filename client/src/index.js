import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from './Redux/store/store';
import { ToastContainer } from 'react-toastify';
import * as Clients from "./GraphqlClient/index";
import { ApolloProvider } from "@apollo/react-hooks";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={Clients}>
        <Provider store={store}>
            <>
                <App />
                <ToastContainer newestOnTop />
            </>
        </Provider>
    </ApolloProvider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
