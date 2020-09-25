import React, { Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function SNSIcons() {
    return (
        <Fragment>
            <Icon style={{ marginRight: "20px" }} name='facebook f' size='large' />
            <Icon style={{ marginRight: "20px" }} name='twitter' size='large' />
            <Icon style={{ marginRight: "20px" }} name='instagram' size='large' />
            <Icon style={{ marginRight: "20px" }} name='youtube play' size='large' />
            <Icon style={{ marginRight: "20px" }} name='pinterest' size='large' />
        </Fragment>);
}