import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {
    render() {
        const { counter } = this.props;

        return (
            <span>
                {counter}
            </span>
        );
    }
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
};
