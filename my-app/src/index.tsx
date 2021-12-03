import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./components/State/state";


let renderDom = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App  dispatch={store.dispatch.bind(store)}  state={store.GetState()}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderDom()
store.subscriber(renderDom)