import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./Redux/Store";
import {Provider} from "react-redux";
import App from './App';



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
// dispatch={store.dispatch.bind(store)}