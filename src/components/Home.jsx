import React from 'react';
import './Home.scss';
import Increment from '../containers/Increment';
import VisibleCounter from '../containers/VisibleCounter';

export default class Home extends React.Component {
    render() {
        console.log('Test');

        return (
            <div className="app">
                <p>
                    Webpack Quickstart
                </p>
                <Increment />
                <VisibleCounter />
            </div>
        );
    }
}
