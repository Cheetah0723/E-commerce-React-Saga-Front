import React from 'react';
import { findNewReleases } from '../Components/Search/Actions';
import history from '../history';
import Homepage from "./Homepage";

export default function HomepageController() {
    const viewAll = () => {
        history.push("/all");
    }

    const displayData = findNewReleases();


    return {viewAll, displayData}
}