import React, { useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    list: {
        marginTop: -10,
    },
    listitem: {
        marginBottom: -15,
        marginLeft: -10,
    }
}));

export default function MessageBox(props) {
    const classes = useStyles();
    const divRef = useRef(null);
    
    useEffect(() => {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    function generateList(props) {
        let list = ["Hallo", "Test123", "Moin", "Hallo", "Test123", "Moin", "Hallo", "Test123", "Moin", "Hallo"].map((item) => (
            <ListItem className={classes.listitem}>
                <ListItemText secondary={item} primary={<Typography style={{ fontSize: 10 }}>User</Typography>} />
            </ListItem>
        ))
        return list;
    }
    return (
        <Box overflow="auto">
            <List className={classes.list} dense={true} disablePadding={true}>
                {generateList()}
                <div id="test" ref={divRef} />
            </List>
        </Box>
    );
}