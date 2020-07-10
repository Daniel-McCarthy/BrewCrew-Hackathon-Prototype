import * as React from "react";
import '../Styles/sign-in.css';

export class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div class={"signup-form"}>
                <form class="" action={"index.html"} method={"post"}>
                    <h1>Sign Up</h1>
                    <input type="text" placeholder="Full Name" class="txtb"></input>
                    <input type="email" placeholder="Email" class="txtb"></input>
                    <input type="password" placeholder="Password" class="txtb"></input>
                    <input type="submit" value="Create Account" class="signup-btn"></input>
                    <a href="#">Already Have one ?</a>
                </form>
            </div>
        )
    }
}
