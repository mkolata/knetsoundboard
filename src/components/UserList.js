import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    list: {
        marginTop: 0,
		marginBottom: 10,
    },
    listitem: {
        marginBottom: -10,
        marginLeft: -10,
    }
}));

export default function MessageBox(props) {
    const classes = useStyles();

    function generateList(props) {
        let list = ["Test1-PC", "Test2-PC"].map((item) => (
            <ListItem className={classes.listitem}>
                <ListItemText primary={item} />
            </ListItem>
        ))
        return list;
    }
    return (
            <List className={classes.list} dense={true} disablePadding={true}>
                {generateList()}
            </List>
    );
}