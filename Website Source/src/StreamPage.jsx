import * as React from "react";

import './Styles/StreamPage.css';
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'

export class StreamPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header></Header>

                <Footer></Footer>
            </div>
        )
    }
}
