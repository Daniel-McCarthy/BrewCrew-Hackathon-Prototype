import * as React from "react";
import $ from 'jquery';

import '../Styles/AgeVerification.css';

export class AgeVerification extends React.Component {
    constructor(props) {
        super(props)

        this.date = new Date();
        this.state = {
            month: this.date.getMonth(),
            day: this.date.getDate(),
            year: this.date.getFullYear()
        }
    }

    validateAge = () => {
        let givenAge = new Date(this.state.year, this.state.month, this.state.day);

        if (this.date.getFullYear() - givenAge.getFullYear() < 21)
            return false;

        if ((this.date.getMonth() + 1) < givenAge.getMonth())
            return false;

        if (this.date.getDate() < givenAge.getDate())
            return false;

        return true;
    }

    onDayInput = (event) => {
        let input = event.target.value;
        input = this.setStringNumbersOnly(input, 2);
        event.target.value = input;

        this.setState({day: parseInt(input)});

        if (input.length === 2)
            this.getYearInput().focus();
    }

    onMonthInput = (event) => {
        let input = event.target.value;
        input = this.setStringNumbersOnly(input, 2);
        event.target.value = input;
        
        this.setState({month: parseInt(input)});

        if (input.length === 2)
            this.getDayInput().focus();
    }

    onYearInput = (event) => {
        let input = event.target.value;
        input = this.setStringNumbersOnly(input, 4);
        event.target.value = input;

        this.setState({year: parseInt(input)});
    }

    setStringNumbersOnly = (string, maxLength) => {
        return string.replace(/[^0-9]|^0/g, '').substr(0,maxLength);
    } 

    onSubmitClick = () => {
        if (this.validateAge() === false)
            return;

        this.props.onAgeVerified();
    }

    getDayInput = () => {
        return $('#dayInput');
    }
    getMonthInput = () => {
        return $('#monthInput');
    }
    getYearInput = () => {
        return $('#yearInput');
    }

    render() {
        return (
            <div id='blockAccess'>
                <div id='ageVerificationForm'>
                    <div className='relative'>
                        <b className='headerText'>Age Verification</b><br/>
                        <a>You must be <b><i>at least 21</i></b> to access this website.</a><br/>
                        <a>Please enter your age below:</a><br/>
                        <form>
                            <input id='monthInput' onChange={this.onMonthInput}  placeholder="MM"></input>
                            <input id='dayInput'   onChange={this.onDayInput}    placeholder="DD"></input>
                            <input id='yearInput'  onChange={this.onYearInput}   placeholder="YYYY"></input>
                        </form>
                        <button onClick={this.onSubmitClick}>Submit Age</button>
                    </div>
                </div>
            </div>
        )
    }
}
