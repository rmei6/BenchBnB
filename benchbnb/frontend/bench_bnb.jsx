import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from "./store/store";
import {signup,login,logout} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser){
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: {
                id: window.currentUser.id
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }else{
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);

});