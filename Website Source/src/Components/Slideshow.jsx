import * as React from "react";

import '../Styles/Slideshow.css';

let isMounted = false;

export class Slideshow extends React.Component {
    constructor(props) {
        super(props)

        this.imgRef = null;

        let imagesToUse = [];
        if (props.image !== undefined) {
            imagesToUse[0] = props.image;
        } else if (props.images != undefined) {
            for (let i = 0; i < props.images.length; i++) {
                imagesToUse[i] = this.props.images[i];
            }
        }
        this.state = {
            images: imagesToUse,
            currentIndex: 0,
            photoChangeTimeoutSeconds: this.props.timeBetweenImageChanges != null
                ? this.props.timeBetweenImageChanges
                : 5,
            height: this.props.height
        }
    }

    changePhotoAfterTime = () => {
        let newIndex = (this.state.currentIndex + 1) % this.state.images.length;
        setTimeout(function() { 
            if (isMounted === true) {
                this.setState({currentIndex: newIndex});
            }
        }.bind(this), this.state.photoChangeTimeoutSeconds * 1000);
    }

    removeFadeClass = () => {
        if (this.imgRef == null || isMounted === false)
            return;

        this.imgRef.className = '';
    }

    setRef = (element) => {
        if (element != null) {
            this.imgRef = element;
            element.className = 'fade';
        }
    }

    componentDidMount = () => {
        isMounted = true;
    }

    componentWillUnmount = () => {
        isMounted = false;
    }

    render() {
        return (
            <div className='slideshow'>
                <img 
                    height={this.state.height}
                    ref={element => {this.setRef(element)}}
                    className={'fade'}
                    src={this.state.images[this.state.currentIndex]}
                    onLoad={this.changePhotoAfterTime}
                    onAnimationEnd={this.removeFadeClass}
                ></img>
            </div>
        )
    }
}
