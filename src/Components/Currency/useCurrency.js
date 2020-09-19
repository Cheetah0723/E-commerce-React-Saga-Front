import { useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateCurrency } from "../../Actions/cart.action"
import { selectCurrency } from "../Selectors";

export default function useCurrency() {
    const [openStatus, setOpen] = useState(false)
    const currency = useSelector(selectCurrency)
 
    const handleClick = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const dispatch = useDispatch()

    const handleSubmit = useCallback(
        (value) => {
            dispatch(updateCurrency(value)) //Update the currency setting in the store
            handleClose()//close the modal
        },
        [dispatch],
    )

    return { openStatus, handleClick, handleClose, handleSubmit, currency }
}