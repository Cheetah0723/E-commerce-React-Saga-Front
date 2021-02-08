import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function BootStrapInstaTileView({ handleClick }) {

    const imgStyle = {
        width: '100%',
        marginTop: "20px",
    }
    const click = e => { handleClick(e.target.name) }

    return (
        <Carousel
            style={{ height: "200px", marginTop: "5px", marginLeft: "4%", marginRight: "4%" }}
            arrowLeft={<ArrowBackIosIcon />}
            arrowRight={<ArrowForwardIosIcon />}
            slidesPerPage={6}
            arrows
            infinite
            addArrowClickHandler
            breakpoints={{
                640: {
                    slidesPerPage: 1,
                    arrows: false
                },
                900: {
                    slidesPerPage: 4,
                    arrows: false
                }
            }}
        >
            <img src='https://my-ec-react.s3-ap-southeast-2.amazonaws.com/product-photos/insta-1.JPG' onClick={click} key="1" name="1" style={imgStyle} alt="insta1" />
            <img src="https://my-ec-react.s3-ap-southeast-2.amazonaws.com/product-photos/insta-2.JPG" onClick={click} key="2" name="2" style={imgStyle} alt="insta2" />
            <img src="https://my-ec-react.s3-ap-southeast-2.amazonaws.com/product-photos/insta-3.JPG" onClick={click} key="3" name="3" style={imgStyle} alt="insta3" />
            <img src="https://my-ec-react.s3-ap-southeast-2.amazonaws.com/product-photos/insta-4.JPG" onClick={click} key="4" name="4" style={imgStyle} alt="insta4" />
            <img src="https://my-ec-react.s3-ap-southeast-2.amazonaws.com/product-photos/insta-5.JPG" onClick={click} key="5" name="5" style={imgStyle} alt="insta5" />
            <img src="https://my-ec-react.s3-ap-southeast-2.amazonaws.com/product-photos/insta-6.JPG" onClick={click} key="6" name="6" style={imgStyle} alt="insta6" />
            <img src="https://my-ec-react.s3-ap-southeast-2.amazonaws.com/product-photos/insta-7.JPG" onClick={click} key="7" name="7" style={imgStyle} alt="insta7" />
        </Carousel>
    );
}
