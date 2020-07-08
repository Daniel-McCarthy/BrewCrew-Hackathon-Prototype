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

    onLabelClicked = () => {
        this.setState({welcomeText: "Peek-a-boo!", showBird: !this.state.showBird});
    }

    render() {
        return (
            <div>
                <Header></Header>
                <label id='WelcomingLabel' className='Centered' onClick={this.onLabelClicked} >{this.state.welcomeText}</label>
                { this.state.showBird ? <img className='Centered' src={this.state.birdUrl}></img> : null }
            </div>
        )
    }
}
