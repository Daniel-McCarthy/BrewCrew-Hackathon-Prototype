import * as React from "react";

import '../Styles/Header.css';
import cbiLogoURL from '../Images/logo-cbrands.png';
import menuDropdownLogoURL from '../Images/menu-dropdown.png'

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
                    <img id='menu-dropdown' src={menuDropdownLogoURL}></img>
                    <img id='logo' src={cbiLogoURL}></img>
                </div>
                <div className='buttongroup' id='LoginSignupButtons'>
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </header>
        )
    }
}
