import { useState } from 'react';
import { useStore, useDispatch } from "react-redux"
import { selectProductId } from "../Selectors"
import { CREATE_REVIEW } from "../../Actions/action.types"

const noError = {
    title: false,
    name: false,
    email: false,
    body: false
}
export default function useReviewForm() {
    const [state, setState] = useState({
        productId: "",
        overall: 0,
        fit: 0,
        length: 0,
        comfort: 0,
        title: "",
        name: "",
        email: "",
        body: "",
        dateTime: ""
    })
    const [errors, setErrors] = useState(noError)
    const store = useStore().getState()
    const productId = selectProductId(store)

    //TODO now always set it to be false...
    const readOnly = false

    const dispatch = useDispatch()

    const save = (name, value) => {
        let newValue = (name in ["fit", "overall", "length", "comfort"]) ?
            parseInt(value) : value
        setState({ ...state, [name]: [newValue] })
    }

    const isValid = () => {
        let newErrors = noError
        newErrors.title = (state.title === "" || state.title.length > 50 || !/^[A-Za-z]/i.test(state.title)) ? true : false
        newErrors.name = (state.name === "" || state.name.length > 50 || !/^[A-Za-z]/i.test(state.name)) ? true : false
        newErrors.email = (state.email === "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)) ? true : false
        newErrors.body = (state.body === "" || !/^[A-Za-z]/i.test(state.body)) ? true : false
        return newErrors
    }

    const submit = (data) => {
        dispatch({
            type: CREATE_REVIEW,
            review: data
        }) //Update the currency setting in the store


        // TODO
        // set the store state to be loading => successful => 
        // let the view to check the store to update the feedback
    }

    const handleSubmit = () => {
        const newError = isValid(state)
        if (!newError.title && !newError.name && !newError.email && !newError.body
            && productId !== undefined) {
            const newState = { ...state }
            const date = new Date()
            newState.dateTime = date.toJSON()
            newState.productId = productId
            submit(newState)
        } else {
            setErrors(newError)
        }
    }

    const clearError = () => {
        setErrors(noError)
    }

    return {
        state, save, handleSubmit, errors, readOnly, clearError
    }
}
