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

    simulateSignOut = () => {
        let url = new URL(document.URL);
        url.searchParams.delete('l');
        location.href = url;
    }

    simulateSignIn = () => {
        let url = new URL(document.URL);
        url.searchParams.set('l', 1);
        location.href = url;
    }

    renderButtons = () => {
        let currentURL = new URL(document.URL);
        let loggedInParamVal = currentURL.searchParams.get('l');

        if (loggedInParamVal === '1') {
            return (
                <div className='buttongroup' id='LoginSignupButtons'>
                    <button onClick={this.simulateSignOut}>Sign Out</button>
                </div>
            );
        }

        return (
            <div className='buttongroup' id='LoginSignupButtons'>
                <button onClick={this.simulateSignIn} >Login</button>
                <button>Sign Up</button>
            </div>
        )
    }

    render() {
        return (
            <header>
                <div className='imageContainer'>
                    <img id='menu-dropdown' src={menuDropdownLogoURL}></img>
                    <img id='logo' src={cbiLogoURL}></img>
                </div>
                {this.renderButtons()}
            </header>
        )
    }
}
