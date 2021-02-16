import { findByColor } from '../../Actions/search.action';
import { useSelector, useDispatch } from 'react-redux';
import { SAVE_SEARCH_INPUT } from '../../Actions/action.types';

//Deprecated
export default function useSearchBox(props) {
    let searchPhrase = [];

    const dispatch = useDispatch();

    const dispatchSearch =   (input) => dispatch({
            type: SAVE_SEARCH_INPUT,
            input: input
        })

    // Submit the search input when the user clicked the search icon or pressed the enter key
    function submitSearch(value) {
        let mounted = false;
        searchPhrase = value.includes(" ") ? value.split(" ") : [value];
        let target = { color: [], size: [] };
        target = searchPhrase.map(each => decideSearchMethod(each, target));
        mounted = true;
        if (mounted) {
            let searchResults = [];
            let midResult = [];
            // eslint-disable-next-line
            target.map(each => {
                if (each.color !== [] && each.color !== undefined) {
                    // Append products to the searchResults
                    midResult = findByColor(each.color);
                    searchResults = searchResults.concat(midResult);
                    dispatchSearch(searchResults); //Save the search input to Redux store
                }
                if (each.size !== [] && each.size !== undefined) {
                    searchResults = searchResults.concat(midResult);
                    dispatchSearch(searchResults); //Save the search input to Redux store
                }
                else {//Invalid search input
                    props.onInvalidSearch();
                }
            })
        }

    }

    const decideSearchMethod = (str, target) => { // target = {color:[], size:[]};
        //TODO in is not working again....
        if (["pink", "dark grey", "light grey", "orange", "blue"].includes(str)) {
            target.color.push(str);
        }
        if (["XS", "S", "M", "L", "XL"].includes(str)) {
            target.color.push(str);
        }
        return target;
    }

    const inputInStore = useSelector(state => state.SearchReducer).input;

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() === "" && inputInStore !== []) {
            dispatchSearch([]);
        }
        if (e.key === 'Enter' && e.target.value !== undefined) {
            submitSearch(e.target.value);
        }
    }

    return { _handleKeyDown }

}

