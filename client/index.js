import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupaPage from './components/signup/SignupPage';

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={App} />
                <Route exact path="/" component={Greetings} />
                <Route path="/signup" component={SignupaPage} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);