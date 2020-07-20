import * as React from "react";

import './Styles/WineSite.css';
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'
import { SignIn } from './Components/sign-in.jsx'
import { Slideshow } from './Components/Slideshow.jsx'
import { Calendar } from './Components/Calendar.jsx'
import { AgeVerification } from './Components/AgeVerification.jsx'

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
                {this.props.ageVerified
                    ? null
                    : <AgeVerification onAgeVerified={this.props.onAgeVerified} className={'disable'}/>}

                <Header isLoggedIn={this.props.isLoggedIn} onLoginStatusChange={this.props.onLoginStatusChange}/>
                <Slideshow height={400} images={this.state.slideShowImages} timeBetweenImageChanges={8}></Slideshow>
                <div className='parallax-background'>
                    <div id={'infoDiv'}>
                        <SignIn onLoginStatusChange={this.props.onLoginStatusChange}/>
                        <div id='introText'>
                            <div className={'titleText'}>
                                <div id = 'companyName'> Constellation Brands<br/></div>
                                <div id = 'streamName'> <b>Wine Tasting Broadcasts<br/></b></div>
                            </div>
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
                    <Calendar></Calendar>
                </div>

                <div className='stuffContainer'>
                    <h2 id='eventTitle'>
                        Upcoming Events<br/>
                    </h2>

                    <p id='eventName'>
                        Sunday, July 12 - Corvo Attano -<br/>Cooking with Corvo<br/>
                    </p>

                    <p id='eventDescription'>
                        Join us this month as prolific chef Corvo Attano, author of <br/>"Delicious Things for your Stomach", walks us through a live preparation of <br/>some of his favourite dishes that either pair well with, or utilize our <br/>Wine of the Month (see below)!
                    </p>

                    <h2 id='wineTitle'>
                        Wine of The Month<br/>
                    </h2>

                    <p id='wineName'>
                        Simi - Winemaker's Select Lot<br/>No.55 Sauvignon Blanc<br/>
                    </p>

                    <p id='wineDescription'>
                        "This brilliantly clear, pale-straw-colored Sauvignon Blanc <br/>is fresh, bright, and crisp. The wine opens with complex <br/>aromas of lime zest, Meyer lemon, pink grapefruit, <br/>lemongrass, freshly cut hay, honeysuckle, and a hint <br/>of wet stone." - Simi
                    </p>
                </div>
                <a href="https://www.bottlecollective.com/product/2018-simi-winemakers-select-lot-no-55-sauvignon-blanc-sonoma-valley" id='wineBottle'></a>
                <a href="https://www.bottlecollective.com/product/2018-simi-winemakers-select-lot-no-55-sauvignon-blanc-sonoma-valley" id='exitLink'>Click here to order this bottle right to your door!</a>
                <div id='calendarSpacer'></div>
                <Footer></Footer>
            </div>
        )
    }
}
