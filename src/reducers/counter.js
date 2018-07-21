import { ACTION_INCREMENT, ACTION_DECREMENT } from '../actions/counter';

export default (state = 0, action) => {
    switch (action.type) {
        case ACTION_INCREMENT:
            return state + 1;

        case ACTION_DECREMENT:
            return state - 1;

        default:
            return state;
    }
};
