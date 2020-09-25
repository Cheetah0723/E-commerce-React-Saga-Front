import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function ProductReviewItem(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="ProductInstruction">
            <ListItem button onClick={() => {
                setOpen(open => !open)
            }}>
                <ListItemText style={{ textAlign: "center" }} primary="Reviews" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <p>
                    "There is no review yet"
                      </p>
            </Collapse>
        </div>
    )

}