import * as React from "react";

import './Styles/WineSite.css';
import { Header } from './Components/Header.jsx'
import { Slideshow } from './Components/Slideshow.jsx'

export class WineSite extends React.Component {
    constructor(props) {
        super(props)

        let chickadeePhotoUrl = 'https://3.bp.blogspot.com/_73tR7MQIFo8/SxMC59tyoaI/AAAAAAAADNc/UbhAlLJdOW0/s1600/BCChickadee+smalled+12_02_07.jpg';
        let cardinalPhotoURL = 'https://1527ex49ndlb1w9lwr3ovb40-wpengine.netdna-ssl.com/wp-content/uploads/galleries/post-187/full/Cardinal_MG_4575_.jpg';
        let robinPhotoURL = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/10/23/pg-18-robin-2-pa.jpg';

        this.state = {
            welcomeText: "Hello",
            showBird: false,
            birdUrl: chickadeePhotoUrl,
            slideShowImages: [chickadeePhotoUrl, cardinalPhotoURL, robinPhotoURL]
        }
    }

    onLabelClicked = () => {
        this.setState({welcomeText: "Peek-a-boo!", showBird: !this.state.showBird});
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Slideshow height={600} images={this.state.slideShowImages}></Slideshow>

                <label id='WelcomingLabel' className='Centered' onClick={this.onLabelClicked} >{this.state.welcomeText}</label>
                { this.state.showBird ? <img className='Centered' src={this.state.birdUrl}></img> : null }
            </div>
        )
    }
}
