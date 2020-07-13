import * as React from "react";

import './Styles/WineSite.css';
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'
import { SignIn } from './Components/sign-in.jsx'
import { Slideshow } from './Components/Slideshow.jsx'
import { Calendar } from './Components/Calendar.jsx'

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
                <div className='parallax-background'>
                    <div id={'infoDiv'}>
                        <SignIn></SignIn>
                        <div id='introText'>
                            <b className={'SingleLine'}>
                                Welcome to Constellation Brands wine tasting broadcasts!<br/>
                            </b>
                            <a>
                                We're hosting live events showing our fantastic selection of wines, and<br/>
                                engaging with our loyal wine enthusiasts! The tastings are on a regular<br/>
                                schedule to share insight on our variety of wines. Our Drink Night trivia<br/>
                                keeps viewers informed & engaged! Our wines are found in stores across<br/>
                                the country, so join in on the fun and share your time with us. Sign up to<br/>
                                get access to our broadcasts and get notified about upcoming streams! Enjoy!<br/>
                            </a>
                        </div>
                    </div>
                </div>

                <div id='calendarContainer'>
                    <p className='Centered scheduleLabel'>
                        Event Schedule
                    </p>
                    <Calendar></Calendar>
                </div>

                <div id='calendarSpacer'></div>

                <div id={'VideoTest'} className={'Centered'}>
                    <b className={'SingleLine'}>
                        Video Test
                    </b>
                    <iframe 
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Bfz_Ij1ktsw?controls=0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                    ></iframe>
                </div>

                <div id={'VideoTest'} className={'Centered'}>
                    <b className={'SingleLine'}>
                        Stream Test
                    </b>
                    <iframe
                        src="https://player.twitch.tv/?video=662525681&parent=daniel-mccarthy.github.io"
                        frameBorder="0"
                        allowFullScreen={true}
                        scrolling="no"
                        width="560"
                        height="315"
                    ></iframe>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
