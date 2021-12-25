import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/Redux";

import {Provider} from "react-redux";


let renderDom = (store?: any) => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderDom(store)

store.subscribe(() => {

    renderDom(store)
})
//dispatch={store.dispatch.bind(store)}