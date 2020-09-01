import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { categoryData } from '../../Data/newCategoryData';
import ProductContainer from '../Product/ProductContainer';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function Recommendations(props) {

    const contents = categoryData.map(each =>
        <ProductContainer item={each} />
    )

    return (
        <div className="Recommendations" style={{ marginTop: "40px", width: "100%", backgroundColor: "white" }}>
            <p style={{ textAlign: "center", fontSize: "25px" }}><b>You might also like</b></p>
            <Carousel
                slidesPerPage={4}
                infinite
                arrowLeft={<Icon name="chevron left" size='huge' />}
                arrowRight={<Icon name="chevron right" size='huge' />}
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
                {contents}
            </Carousel>
        </div>
    );

}
