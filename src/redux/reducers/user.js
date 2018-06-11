// src/redux/reducers/user.js
import * as Actions from '../actions/actions_type';

const initialState = {
    id: '',
    name: '',
    isBusiness: false
}

export default (state = initialState, action) => {
    switch (action.type) {
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
        break;
    }
}