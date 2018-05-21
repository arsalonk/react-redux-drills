import React from 'react';
import ReactDOM from 'react-dom';
import InterestCalculator from './components/interest-calculator';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <InterestCalculator />
    </Provider>,

    document.getElementById('root')
);
