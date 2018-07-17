// src/redux/reducers/visitedUser.js
import * as Actions from '../actions/actions_type';

const initialState = {
    user_name: '',
    isBusiness: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.VISIT_USER :
            return Object.assign(
                {},
                state,
                {
                    user_name: action.visitedUser.user_name,
                    isBusiness : action.visitedUser.isBusiness
                }
            );
        break;

        default:
            return state;
    }
}