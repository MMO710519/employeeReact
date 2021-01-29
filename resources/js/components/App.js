import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import { About } from "./About";
import { User } from "./User";
import { Top } from "./Top";
import { UserDetail } from "./UserDetail";

export const App = () => {
    return (
        <Router>
            <>
                <Header />

                <Switch>
                    <Route path="/" exact component={Top} />
                    <Route path="/about" component={About} />
                    <Route path="/user" exact component={User} />
                    <Route path="/user/:id" component={UserDetail} />
                </Switch>
            </>
        </Router>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
