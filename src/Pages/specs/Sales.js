import React from 'react';
import Footer from '../../Components/Footer/Footer';
import HeaderContainer from '../../Components/Header/HeaderContainer';
import ProductList from "../../Components/ProductList/ProductList"
import renderer from 'react-test-renderer';

describe("Sales Page", () => {
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
    },]
    const sortDisplayList = (arg) => { console.log(arg) }
    const handleFilter = (arg) => { console.log(arg) }
    const Sales = ({ displayData, sortDisplayList, handleFilter }) => {
        return (<div className="Sales">
            <HeaderContainer />
            <ProductList sortDisplayList={sortDisplayList} handleFilter={handleFilter} display={displayData} />
            <Footer />
        </div>)
    }

    it('renders correctly', () => {
        const component = renderer.create(<Sales display={displayData} sortDisplayList={sortDisplayList}
            handleFilter={handleFilter} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
}
)



