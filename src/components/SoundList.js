import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        //maxWidth: 560,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        //maxHeight: 110,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
        paddingRight: 16,
    },
}));

export default function SoundList(props) {
    const classes = useStyles();
    
    return (
        <Box flex={1} overflow="auto">
            <List dense="true" className={classes.root}>
                <ul className={classes.ul}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 21, 22, 23, 24, 25, 26, 27, 28, 123, 36, 56458, 224, 2].map((item) => (
                        <ListItem button key={`item-${item}`}>
                            <ListItemText primary={`Item ${item}`} />
                        </ListItem>
                    ))}
                </ul>
            </List>
        </Box>
    );
}