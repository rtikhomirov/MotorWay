import React, {useRef} from 'react';
import '../css/ImageList.css';
import ImageCard from './ImageCard';
import ImageModal from "./ImageModal";

const ImageList = (props) => {
    const modalRef = useRef();

    const onImgClick = (image) => {
        modalRef.current.onImageClick(image);
    };

    const images = props.images.map((image) => {
        return <ImageCard
            key={image.id}
            image={image}
            onImgClick={() => onImgClick(image)}
        />
    });

    return (
        <div>
            <div className='imageList mx-auto'>{images}</div>
            <ImageModal
                ref={modalRef}/>
        </div>
    );
};

export default ImageList;