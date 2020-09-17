import { useDispatch, useSelector } from 'react-redux';
import { test, sub } from '../../Actions/cart.action';

export default function useCartData({ item }) {
    const currency = useSelector(state => state.CurrencyReducer.currency)
    const dispatch = useDispatch();

    const addQuantity = () =>
        dispatch(test.addOn(item.id, item.size))


    const subQuantity = () =>
        dispatch(sub(item.id, item.size))


    return { addQuantity, subQuantity, currency }
}