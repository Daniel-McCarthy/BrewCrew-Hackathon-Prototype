import * as React from "react";

import './Styles/StreamPage.css';
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'

export class StreamPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header isLoggedIn={this.props.isLoggedIn} onLoginStatusChange={this.props.onLoginStatusChange}/>
                    <div>

                    </div>
                    <div id={'VideoTest'}>
                        <div>
                        <iframe 
                            width="500"
                            height="350"
                            src="https://www.youtube.com/embed/Bfz_Ij1ktsw?controls=0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}
                        ></iframe>
                        </div>
                        <div className={'textaroni'}>
                            <h2>Happy Tasting</h2>
                            <p>
                                During such a confusing time we want to take some of the confusion away.
                                <br/><br/>
                                Come join us for a simple retreat into the grape vine filled gardens of our most prestigous wineries.
                                <br/><br/>
                                We look forward to welcoming newcomers of wine and wine consseuirs alike to our vast amount of products. During the event feel free to sip on the drinks exclusive to this winery
                                <br/><br/>
                                If you have any questions chime in with anything related to the process of wine making. Remember every glass of wine is WORTH REACHING FOR!
                            </p>
                        </div>
                    </div>
                    <div className={'past'}>
                        <br/>
                        <h3>Past Streams</h3>
                        <div className={"row"}>
                            <div className={"column"}>
                            <img src="../Website Source/src/Images/wood.png" alt="Woodbridge Wine Bottle"/>
                            <p>Woodbridge Winery</p>
                            </div>
                            <div className={"column"}>
                            <img src="../Website Source/src/Images/prisoner.png" alt="Prisoner Wine Company Wine Bottles"/>
                            <p>Prisoner Winery</p>
                            </div>
                            <div className={"column"}>
                            <img src="../Website Source/src/Images/simi.png" alt="Simi Wine Bottles"/>
                            <p>Simi Winery</p>
                            </div>
                            <div className={"column"}>
                            <img src="../Website Source/src/Images/clos.png" alt="Clos Du Bois Wine Bottles"/>
                            <p>Clos Du Boid Winery</p>
                            </div>
                        </div>
                    </div>
                <Footer></Footer>
            </div>
        )
    }
}
