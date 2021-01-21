/*import * as $ from 'jquery'*/
import json from '@/assets/json'
import logo from '@/assets/webpack-logo.png'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import '@/styles/styles.css'
import '@/babel'
import React from 'react'
import {render} from 'react-dom'
import App from "@/App.jsx";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "@/redux/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {forbiddenWordsMiddleware} from "@/redux/middleware";

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk, forbiddenWordsMiddleware)))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

render(app, document.getElementById('app'))