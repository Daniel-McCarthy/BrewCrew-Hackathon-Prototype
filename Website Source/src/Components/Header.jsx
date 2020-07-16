import * as React from "react";
import { Link } from 'react-router-dom';

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
        // Log out and return to home page.
        this.props.onLoginStatusChange(false);
    }

    simulateSignIn = () => {
        this.props.onLoginStatusChange(true);
        scrollTo(0,0);
    }

    renderNavButton = () => {
        let isOnEventsPage = document.URL.indexOf('/Event') !== -1;

        if (!isOnEventsPage) {
            return (
                <Link to={'/Event'} id='navButton' >
                    <button>Events</button>
                </Link>
            )
        }

        return (
            <Link to={'/'} id='navButton' >
                <button>Home</button>
            </Link>
        )
    }

    renderButtons = () => {
        if (this.props.isLoggedIn === true) {
            return (
                <div className='buttongroup' id='LoginSignupButtons'>
                    {this.renderNavButton()}

                    <Link onClick={this.simulateSignOut} to={'/'} id='navButton' >
                        <button>Sign Out</button>
                    </Link>
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
