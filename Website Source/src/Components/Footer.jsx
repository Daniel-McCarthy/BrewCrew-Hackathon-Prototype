import * as React from "react";

import '../Styles/Footer.css';

export class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <footer>
                <div>
                    <p>Presented by Maddy, Jose, Charlie, Jared, and Dan.</p><br/>
                    <a>(Not an official CBI website)</a>
                </div>
            </footer>
        )
    }
}
