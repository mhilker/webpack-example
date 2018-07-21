import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from '../actions/counter';

class Increment extends React.Component {
    onClick = (event) => {
        event.preventDefault();
        this.props.dispatch(increment());
    };

    render() {
        return (
            <div>
                <button type="submit" onClick={this.onClick}>
                    Increment
                </button>
            </div>
        );
    }
}

Increment.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(Increment);
