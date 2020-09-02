import React, {Component} from 'react';

class ImageCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            spans : 0,
            showModal: false
        };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const gridAutoRows = 5; //is taken from css
        const spans = Math.ceil(height / gridAutoRows + 1);

        this.setState({spans});
    };

    onImgMouseOver = (event) => {
        /*
        * 150 is default image width
        * 170 is image width at mouse over on it.
        * These both are taken from ImageList.css
        * */
        let shift = (150 - 170) / 2;
        event.target.style.marginLeft = shift + 'px';
        event.target.style.marginTop = shift + 'px';
    };

    onImgMouseOut = (event) => {
        event.target.style.marginLeft = 0 + 'px';
        event.target.style.marginTop = 0 + 'px';
    };

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                    onMouseOver={this.onImgMouseOver}
                    onMouseOut={this.onImgMouseOut}
                    onClick={this.props.onImgClick}
                />
            </div>
        );
    }
}

export default ImageCard;