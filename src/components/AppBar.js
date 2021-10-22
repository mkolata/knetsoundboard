import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBarUI from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function AppBar(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBarUI position="static">
          <Toolbar>
            <IconButton data-testid="burger-menu-button" edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={props.onAppBarButtonClick}>
              <MenuIcon />
            </IconButton>
            <Typography data-testid="page-name" variant="h6" className={classes.title}>
              {props.pageName}
            </Typography>
          </Toolbar>
        </AppBarUI>
      </div>
    );
  }