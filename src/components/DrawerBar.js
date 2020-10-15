import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import clsx from 'clsx';

import HomeIcon from '@material-ui/icons/Home';
import PublishIcon from '@material-ui/icons/Publish';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

  export default function DrawerBar(props) {
    const classes = useStyles();
    const toggleDrawer = (open) => (event) => { props.onClick(open); };
    let menuitems = {
        1: ['Soundboard',<HomeIcon />],
        2: ['Hotkeys',<KeyboardIcon />],
        3: ['Upload',<PublishIcon />],
        4: ['Settings',<SettingsIcon />],
     }

    return (
        <div>
            <Drawer open={props.drawer} onClose={toggleDrawer(false)}>
                <div className={clsx(classes.list)} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    <List>
                    {Object.keys(menuitems).map((text, index) => (
                        <ListItem button key={menuitems[text][0]} onClick={() => props.handleMenuClick(menuitems[text][0])}>
                            <ListItemIcon>{menuitems[text][1]}</ListItemIcon>
                            <ListItemText primary={menuitems[text][0]} />
                        </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key={'About'} onClick={() => props.handleMenuClick('About')}>
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText primary={'About'} />
                        </ListItem>
                        <ListItem button key={'Close'}>
                            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                            <ListItemText primary={'Close'} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
      );
  }