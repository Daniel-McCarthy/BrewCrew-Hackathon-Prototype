import * as React from "react";

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { WineSite } from "./WineSite.jsx";
import { StreamPage } from "./StreamPage.jsx";

export class Site extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            ageVerified: false
        }
    }

    onLoginStatusChange = (isLoggedIn) => {
        this.setState({isLoggedIn: isLoggedIn});
    }

    ageVerified = () => {
        this.setState({ageVerified: true});
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <WineSite
                                onAgeVerified={this.ageVerified}
                                ageVerified={this.state.ageVerified}
                                isLoggedIn={this.state.isLoggedIn}
                                onLoginStatusChange={this.onLoginStatusChange}
                            />
                        </Route>
                        <Route path="/Event">
                            <StreamPage
                                isLoggedIn={this.state.isLoggedIn}
                                onLoginStatusChange={this.onLoginStatusChange}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
