import React from 'react';
import ProductListDisplay from "../ProductListDisplay"
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const displayData = [{
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
    },
    {
        id: 2,
        name: "Flex Leggings",
        color: "light grey",
        img: "product-photos/ltgrey-front.png",
        price: 60,
        category: "bottoms",
        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
        new: true,
        salesRate: 1,
        img2: "product-photos/ltgrey-back.png"
    }]
    const test = (arg) => { console.log(arg) }
    const component = renderer.create(<ProductListDisplay displayData={displayData}
        handleFilter={test} sortDisplayList={test}
    />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
