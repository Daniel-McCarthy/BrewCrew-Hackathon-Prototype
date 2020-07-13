import * as React from "react";

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { WineSite } from "./WineSite.jsx";
import { StreamPage } from "./StreamPage.jsx";

export class Site extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <WineSite/>
                        </Route>
                        <Route path="/Event">
                            <StreamPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
