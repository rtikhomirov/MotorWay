import React, {Component} from 'react';
import {Modal} from "reactstrap";

class ImageModal extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false,
            imagePath: '',
        };
    }

    toggle = () => {
        this.setState({
            show : !this.state.show
        })
    };

    onImageClick = (image) => {
        this.setState({
            show : true,
            imagePath: image.urls.small
        })
    };

    render() {
        return (
            <div>
                <Modal isOpen={this.state.show} toggle={this.toggle} size='sm' centered={true}>
                    <div className='mx-auto'>
                        <img className='modalImage' src={this.state.imagePath} alt='/#'/>
                    </div>
                </Modal>
            </div>
        );
    }
};

export default ImageModal;