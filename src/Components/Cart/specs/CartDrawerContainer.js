import React from 'react';
import CartDrawerContainer from "../CartDrawerContainer"
import renderer from 'react-test-renderer';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 330;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        textAlign: "center",
        left: "50%",

    },
    hide: {
        display: 'none',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,  // この幅の横に、mainがレイアウトされる。
            flexShrink: 0,   // !!! これが無いと main が Drawer の下に入り込んでしまう
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        textAlign: "center",
        padding: theme.spacing(0, 1),
        left: "50%",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

it('renders correctly', () => {
    const test = (arg) => { console.log(arg) }
    let openStatus = true
    const component = renderer.create(<CartDrawerContainer openStatus={openStatus} close={()=> { openStatus = false }} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
