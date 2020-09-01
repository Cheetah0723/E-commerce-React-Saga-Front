import { useState } from 'react';
import history from '../../history';

export default function ToolBarController(searchResults) {
    const [invalidSearch, setInvalidSearch] = useState(false);

    function openAll() {
        history.push("/all")
    }

    function openSales() {
        history.push("/sales")
    }

    function openHP() {
        history.push("/")
    }

    function handleInvalidSearch() {
        setInvalidSearch(true);
    }

    //searchResults
    function submitSearch() {
        setInvalidSearch(false);
        //TODO save the data to redux store.


    }

    return {
        openAll, openSales, openHP,
        handleInvalidSearch, submitSearch,invalidSearch
    }

}
