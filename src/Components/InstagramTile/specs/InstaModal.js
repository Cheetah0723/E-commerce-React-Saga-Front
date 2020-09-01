import React from 'react';
import InstaModal from "../InstaModal"
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const test = (arg) => { console.log(arg) }
    const item = {
        id: 1,
        name: "Flex Leggings",
        color: "pink",
        img: "product-photos/pink-front.png",
        price: 60,
        category: "bottoms",
        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
        new: true,
        salesRate: 1,
        img2: "product-photos/pink-back.png"
    }
    const component = renderer.create(<InstaModal openModal={true}
        instaImg='../../product-photos/insta-7.JPG' instaDescription="..."
        product={item} handleClose={test}
    />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

