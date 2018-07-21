export const ACTION_INCREMENT = 'INCREMENT';
export const ACTION_DECREMENT = 'DECREMENT';

export const increment = () => ({
    type: ACTION_INCREMENT,
});

export const decrement = () => ({
    type: ACTION_DECREMENT,
});
