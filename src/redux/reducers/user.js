// src/redux/reducers/user.js
import * as Actions from '../actions/actions_type';

const initialState = {
    user_name: 'paulpog',
    name: 'Paul Pogba',
    isBusiness: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.SELECT_USER :
            return Object.assign(
                {},
                state,
                {
                    user: action.user
                }
            );
        break;
        case Actions.AUTH_USER :
            return Object.assign(
                {},
                state,
                {
                    isBusiness : false,
                    id: action.id,
                    name: action.name
                }
            );
        break;

        default:
            return state;
    }
}