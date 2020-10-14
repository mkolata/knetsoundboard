import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

export default function MenuBar(props) {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={props.onClick}> 
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {props.page}
                </Typography>
            </Toolbar>
        </AppBar>
        );
}