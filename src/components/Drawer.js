import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DrawerUI from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import PublishIcon from '@material-ui/icons/Publish';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});


export default function Drawer(props) {
    const classes = useStyles();
    const toggleDrawer = () => (event) => { props.onDrawerClick(); };

    return (
            <DrawerUI open={props.drawer} onClose={toggleDrawer()}>
                <div className={clsx(classes.list)} role="presentation">
                    <List>
                        <ListItem button data-testid={'Soundboard-menu-button'} key={'Soundboard-menu-button'} onClick={() => props.handleMenuClick('Soundboard')}>
                            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                            <ListItemText primary={'Soundboard'} />
                        </ListItem>
                        <ListItem button data-testid={'Upload-menu-button'} key={'Upload-menu-button'} onClick={() => props.handleMenuClick('Upload')}>
                            <ListItemIcon>{<PublishIcon />}</ListItemIcon>
                            <ListItemText primary={'Upload'} />
                        </ListItem>
                    </List>
                </div>
            </DrawerUI>
    );
}