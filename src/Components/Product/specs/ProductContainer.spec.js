import React from 'react';
import ProductContainer from "../ProductContainer"
import renderer from 'react-test-renderer';
import { useSelector } from "react-redux"

jest.mock('react-redux', () => ({
    useSelector: jest.fn().mockReturnValue({
        addedItems: ["item1"],
        total: 100
    }),
}));

it.skip('renders correctly', () => {
    const item = {
        id: 1,
        name: "Flex Leggings",
        color: "pink",
        img: "product-photos/pink-front.png",
        AUprice: 60,
        USprice: 40,
        category: "bottoms",
        texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
        new: true,
        salesRate: 1,
        img2: "product-photos/pink-back.png",
        size: "XS"
    }
    const test = (arg) => { console.log(arg) }

    const sizeAvailability = [false, false, true, true, true]
    const component = renderer.create(<ProductContainer handleClick={test} addSize={test}
        sizeAvailability={sizeAvailability} item={item}
    />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
