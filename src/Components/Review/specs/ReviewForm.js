import React from 'react'
import ReviewForm from "../ReviewForm"
import renderer from 'react-test-renderer'
import useReviewForm from "../useReviewForm"

const update = () => jest.fn()
const errors = {}
const save = () => jest.fn()
const handleSubmit = () => jest.fn()

const setup = () => {
    jest.spyOn(useReviewForm).mockReturnValue({ update, errors, save, handleSubmit });
};
describe('<ReviewForm />', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("Success Case", () => {
        setup({ productName: "test"});
        const reviewController = useReviewForm();
        reviewController();
        expect(useReviewForm).toHaveBeenCalledTimes(1);
    });

    it('renders correctly', () => {
        const component = renderer.create(<ReviewForm productName="test" />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});