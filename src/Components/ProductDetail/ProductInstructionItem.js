import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { v4 as uuidv4 } from 'uuid';

export default function EachProductInstruction({data}) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="ProductInstruction" key={uuidv4()}>
            <ListItem button onClick={() => {
                setOpen(open => !open)
            }}>
                <ListItemText style={{ textAlign: "center" }} primary={data.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button>
                        {data.body}
                    </ListItem>
                </List>
            </Collapse>
        </div>
    )

}