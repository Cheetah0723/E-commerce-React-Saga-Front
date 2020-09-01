import React from 'react';
import CartEachProduct from "../CartEachProduct"
import Enzyme, { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import CartReducer from "../CartReducer"
import CurrencyReducer from "../../Currency/CurrencyReducer"

configure({ adapter: new Adapter() });


describe('CartEachProduct', () => {
    const test = (arg) => { console.log(arg) }
    const initialState = {
        CartReducer: { addedItems: [], total: 0, id: 0, size: "", currency: "AUD" },
        CurrencyReducer: { currency: "AU" }
    }
    const mockRootReducer = combineReducers({
        CartReducer,
        CurrencyReducer
    });
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
        img2: "product-photos/pink-back.png",
        size: "XS"
    }

    const getWrapper = (mockStore = createStore(mockRootReducer, initialState)) => mount(
        <Provider store={mockStore}>
            <CartEachProduct item={item} addQuantity={test}
                subQuantity={test} />
        </Provider>
    );



    it('should dispatch the correct action on button click', () => {
        const initialState = {
            addedItems: [
                {
                    id: 1,
                    name: "Flex Leggings",
                    color: "pink",
                    img: "product-photos/pink-front.png",
                    price: 60,
                    category: "bottoms",
                    texture: ["56% Nylon", "41% Polyester", "3% Elastane"],
                    new: true,
                    salesRate: 1,
                    img2: "product-photos/pink-back.png",
                    quantity: 2,
                    size: "XS"
                }
            ], total: 0, id: 0, size: "", currency: "AUD"
        }
        const mockStore = createStore(mockRootReducer, initialState);
        mockStore.dispatch = jest.fn();

        const wrapper = getWrapper(mockStore);
      
    });


});




//wrapper.find('[data-test="add-quantity-btn"]').simulate('click')
//wrapper.find('[data-test="sub-quantity-btn"]').simulate('click');
//expect(mockStore.dispatch).toHaveBeenCalledWith(addQuantity());
//expect(mockStore.dispatch).toHaveBeenCalledWith(subQuantity());