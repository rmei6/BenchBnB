import React from "react";
import GreetingContainer from "./greeting_container";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import { Route, Link } from "react-router-dom";
import { AuthRoute } from "../util/route.util";

const App = () => (
    <div>
        <header>
            <Link to='/' className="header-link">
                <h1>Bench BnB</h1>
            </Link>
            <GreetingContainer />
        </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;