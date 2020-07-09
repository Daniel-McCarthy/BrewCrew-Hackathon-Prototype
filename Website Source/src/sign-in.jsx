import * as React from "react";

import './Styles/WineSite.css';
import { Header } from './Components/Header.jsx'

export class WineSite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            welcomeText: "Hello",
            showBird: false,
            birdUrl: 'https://3.bp.blogspot.com/_73tR7MQIFo8/SxMC59tyoaI/AAAAAAAADNc/UbhAlLJdOW0/s1600/BCChickadee+smalled+12_02_07.jpg'
        }
    }

    render() {
        return (
            <div class={"signup-form"}>
                <form class="" action={"index.html"} method={"post"}>
                    <h1>Sign Up</h1>
                    <input type="text" placeholder="Full Name" class="txtb">
                    <input type="email" placeholder="Email" class="txtb">
                    <input type="password" placeholder="Password" class="txtb">
                    <input type="submit" value="Create Account" class="signup-btn">
                    <a href="#">Already Have one ?</a>
                </form>
            </div>
        )
    }
}
