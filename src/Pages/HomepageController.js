
import { findNewReleases } from '../Components/../Actions/search.action';
import history from '../history';

export default function useHomepage() {
    const viewAll = () => {
        history.push("/all");
    }

    const displayData = findNewReleases();


    return {viewAll, displayData}
}