// src/redux/reducers/visitedUser.js
import * as Actions from '../actions/actions_type';

const initialState = {
    user_name: '',
    name: '',
    isBusiness: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.VISIT_USER :
            return Object.assign(
                {},
                state,
                {
                    visitedUser: action.visitedUser
                }
            );
        break;

        default:
            return state;
    }
}