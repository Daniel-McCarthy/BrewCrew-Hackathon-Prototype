import * as React from "react";

import './Styles/WineSite.css';
import { Header } from './Components/Header.jsx'
import { Slideshow } from './Components/Slideshow.jsx'

// Slideshow Images
import wineURL1 from './Images/alcoholic_beverage_beverage_blur_bokeh_champagne_close_up_depth_of_field_drink-1554619.jpeg';
import wineURL2 from './Images/wine_bottle_alcohol_bottle_of_wine_bar_shelf_enoteca_aperitif-341736.jpeg';
import wineURL3 from './Images/wines-2748006_1920.jpg';
import wineURL4 from './Images/wine-sun-silhouette-vine-grape-vintage-vineyards-alcohol-red.jpg';

export class WineSite extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            slideShowImages: [wineURL1, wineURL2, wineURL3, wineURL4]
        }
    }

    onLabelClicked = () => {
        this.setState({welcomeText: "Peek-a-boo!", showBird: !this.state.showBird});
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Slideshow height={400} images={this.state.slideShowImages} timeBetweenImageChanges={8}></Slideshow>
                <div id={'infoDiv'} className={'Centered'}>
                    <b className={'SingleLine'}>
                        Placeholder introduction!
                    </b>
                    <a>
                        Text placeholder goes here. Text placeholder goes here. Text placeholder goes here. Text placeholder goes here. Text placeholder goes here.&nbsp;
                        Text placeholder goes here. Text placeholder goes here. Text placeholder goes here. Text placeholder goes here. Text placeholder goes here.&nbsp;
                        Text placeholder goes here. Text placeholder goes here. Text placeholder goes here. Text placeholder goes here. Text placeholder goes here.&nbsp;
                        Text placeholder goes here. Text placeholder goes here. Text placeholder goes here. Text placeholder goes here. Text placeholder goes here.&nbsp;
                        Text placeholder goes here. Text placeholder goes here. Text placeholder goes here. Text placeholder goes here. Text placeholder goes here.
                    </a>
                </div>

                <div id={'VideoTest'} className={'Centered'}>
                    <b className={'SingleLine'}>
                        Video Test
                    </b>
                    <iframe 
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Bfz_Ij1ktsw?controls=0"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    ></iframe>
                </div>

                <div id={'VideoTest'} className={'Centered'}>
                    <b className={'SingleLine'}>
                        Stream Test
                    </b>
                    <iframe
                        src="https://player.twitch.tv/?video=612977898&parent=https%3A%2F%2Fdaniel-mccarthy.github.io%2FBrewCrew-Hackathon-Prototype"
                        frameborder="0"
                        allowfullscreen="true"
                        scrolling="no"
                        height="560"
                        width="315"
                    ></iframe>
                </div>

            </div>
        )
    }
}
