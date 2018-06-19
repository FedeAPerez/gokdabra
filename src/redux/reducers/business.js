// src/redux/reducers/business.js
import * as Actions from '../actions/actions_type';
const initialState = {
    businessList: [],
    business: {
        business_name : ''
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.REQUEST_BUSINESSLIST :
            return Object.assign({}, state, {
                isFetching: true,
                lastRequested: action.requested_at
            })
        break;
        case Actions.RECEIVE_BUSINESSLIST :
            return Object.assign({}, state, {
                isFetching: false,
                businessList: action.businessList,
                lastUpdated: action.received_at
            })
        break;

        case Actions.SELECT_BUSINESS:
            return Object.assign(
                {},
                state,
                {
                    business : action.business
                }
            );
        break;

        case Actions.FAV_BUSINESS:
            let business = Object.assign({}, state.business);
            business.fav = true;
            console.log(business)
            return {
                ...state,
                business: business
            };
        break;

        default:
            return state;
        break;
    }
}