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
            <div className={"signup-form"}>
                <form action={"index.html"} method={"post"}>
                    <h1>Sign Up</h1>
                    <input type="text" placeholder="Full Name" className="txtb"></input>
                    <input type="email" placeholder="Email" className="txtb"></input>
                    <input type="password" placeholder="Password" className="txtb"></input>
                    <input type="submit" value="Create Account" className="signup-btn"></input>
                    <a href="#">Already Have one ?</a>
                </form>
            </div>
        )
    }
}
