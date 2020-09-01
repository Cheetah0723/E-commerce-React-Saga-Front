import CartDrawer from "../Cart"
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
    const container = shallow(<CartDrawer showButton={true} />);
    expect(container.html()).toMatchSnapshot();
});
