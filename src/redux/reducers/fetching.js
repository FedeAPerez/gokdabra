// src/redux/reducers/fetching.js
import * as Actions from '../actions/actions_type';

const initialState = {
    isFetching: false,
    requested_at : '',
    finished_at : ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.START_FETCHING :
            return Object.assign(
                {},
                state,
                {
                    isFetching : true,
                    requested_at : action.requested_at
                }
            );

        case Actions.FINISHED_FETCHING:
            return Object.assign(
                {},
                state,
                {
                    isFetching : false,
                    finished_at : action.finished_at
                }
            );

        default:
            return state;
    }
}