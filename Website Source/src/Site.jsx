import * as React from "react";

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { WineSite } from "./WineSite.jsx";
import { StreamPage } from "./StreamPage.jsx";

export class Site extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    onLoginStatusChange = (isLoggedIn) => {
        this.setState({isLoggedIn: isLoggedIn});
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <WineSite isLoggedIn={this.state.isLoggedIn} onLoginStatusChange={this.onLoginStatusChange}/>
                        </Route>
                        <Route path="/Event">
                            <StreamPage isLoggedIn={this.state.isLoggedIn} onLoginStatusChange={this.onLoginStatusChange}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
