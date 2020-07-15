import * as React from "react";
import '../Styles/sign-in.css';
import $ from 'jquery';

export class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    fakeRegistration = () => {
        let nameEntryData = { inputText: 'New User', inputId: '#nameInput', overlayId: '#nameOverlay', overlayTextId: '#nameOverlayText'}
        let emailEntryData = { inputText: 'newCustomer@gmail.com', inputId: '#emailInput', overlayId: '#emailOverlay', overlayTextId: '#emailOverlayText'}
        let passwordEntryData = {inputText: '•••••••••', inputId: '#passwordInput', overlayId: '#passwordOverlay', overlayTextId: '#passwordOverlayText'}
        let dataArray = [ nameEntryData, emailEntryData, passwordEntryData ];

        this.clearPlaceholders();
        this.simulateInputEntry(dataArray);
    }

    clearPlaceholders = () => {
        this.setState({namePlaceholder: '', emailPlaceholder: '', passwordPlaceholder: ''})
    }

    simulateInputEntry = (dataArray) => {
        if (dataArray.length === 0)
            return;

        let nextInput = dataArray[0];
        let inputText = nextInput.inputText;
        let inputID = nextInput.inputId;
        let overlayID = nextInput.overlayId;
        let overlayTextID = nextInput.overlayTextId;
        
        let inputElement = $(inputID);
        inputElement.addClass('hideCursor');

        let inputOverlay = $(overlayID);
        inputOverlay.css('background-color', 'transparent');
        
        let inputWidth = inputElement.outerWidth();
        let inputHeight = inputElement.outerHeight();

        inputOverlay.css('background-color', 'none').css('vertical-align', 'middle');
        inputOverlay.outerWidth(inputWidth).outerHeight(inputHeight);

        let overlayText = $(overlayTextID);
        overlayText.text(inputText.charAt(0));
        let overlayTextHeight = overlayText.outerHeight();
        let inputOverlayHeight = inputOverlay.outerHeight();
        let padding = (inputOverlayHeight - overlayTextHeight) / 2;
        overlayText.css('padding-top', padding).css('padding-bottom', padding).css('margin-top', 0).css('margin-bottom', 0);
        
        let inputPosition = inputElement.position();
        inputOverlay.css('top', inputPosition.top).css('left', inputPosition.left);
        inputOverlay.css('margin-top', inputElement.css('margin-top'))

        let i = 1;
        let length = inputText.length;
        let timer = setInterval(
            () => {
                if (i >= length) {
                    clearInterval(timer);
                    dataArray.shift();
                    this.simulateInputEntry(dataArray);
                }

                overlayText.text(overlayText.text()+ inputText.charAt(i));
                i++;
            }, 75
        )
    }

    onSubmit = () => {
        let url = new URL(document.URL);
        url.searchParams.set('l', 1);
        location.href = url;
    }

    render() {
        return (
            <div className={"signup-form"}>
                <form>
                    <h1>Sign Up</h1>
                    <a href="#">Already Have one ?</a>
                    <input id='nameInput'     type="text"     placeholder="Full Name"   className={"txtb"} onClick={this.fakeRegistration}></input>
                    <input id='emailInput'    type="email"    placeholder="Email"       className="txtb"></input>
                    <input id='passwordInput' type="password" placeholder="Password"    className="txtb"></input>
                    <input id='submitButton' type="submit" value="Create Account" className="signup-btn" onClick={this.onSubmit}></input>
                </form>

                <span id='nameOverlay' className='overlayDiv'>
                    <h3 id='nameOverlayText'></h3>
                </span>
                <span id='emailOverlay' className='overlayDiv'>
                    <h3 id='emailOverlayText'></h3>
                </span>
                <span id='passwordOverlay' className='overlayDiv'>
                    <h3 id='passwordOverlayText'></h3>
                </span>
            </div>
        )
    }
}
