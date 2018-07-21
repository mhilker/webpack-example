import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';

export default class App extends React.Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <Router>
                    <Route path="/" component={Home} />
                </Router>
            </Provider>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired,
};
