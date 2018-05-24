import { increment, decrement } from '../actions'
import { handleActions } from 'redux-actions';
const initialState = {
    test: 'a',
    value: 0,
};

export default handleActions({
    [increment]: state => ({
        ...state,
        value: state.value + 1
    }),
    [decrement]: state => (
        {...state,
        value: state.value - 1
        }
    )
}, initialState);