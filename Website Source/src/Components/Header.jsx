import * as React from "react";

import '../Styles/Header.css';
import cbiLogoURL from '../Images/logo-cbrands.png';

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <header>
                <div className='imageContainer'>
                    <img id='logo' src={cbiLogoURL}></img>
                </div>
            </header>
        )
    }
}
