import React from 'react';
import SizeTabController from "../SizeTabController"
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<SizeTabController />', () => {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapper = Enzyme.shallow(<SizeTabController />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Change size', () => {
        it('calls setSize with a different size', () => {
            //
            // expect(setSize).toHaveBeenCalledWith(1);
        });
    });

    describe('', () => {
        it('updates the availability when receiving a new argument', () => {
        
          // expect(setState).toHaveBeenCalledWith(-1);
        });
    });


});