import React from "react";
import {Link} from 'react-router-dom';

const Greeting = (props) => {
    const links = () => (
        <nav className="login-signup">
            <Link to='/login'>Login</Link>
            <br />
            or
            <br />
            <Link to='/signup'>Sign Up!</Link>
        </nav>
    );
    const welcome = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {props.currentUser.username}</h2>
            <button className="header-button" onClick={props.logout}>Log Out</button>
        </hgroup>
    );
    return props.currentUser ? welcome() : links();
};

export default Greeting;