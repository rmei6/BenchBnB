import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const null_state = Object.freeze({id:null});

const sessionReducer = (state = null_state , action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({},state,{id:action.currentUser.id});
        case LOGOUT_CURRENT_USER:
            return null_state;
        default:
            return state;
    }
};

export default sessionReducer;