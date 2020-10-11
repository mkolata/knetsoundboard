import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import PublishIcon from '@material-ui/icons/Publish';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function MenuBar(props) {
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
  const classes = useStyles();

  return ( 
    <AppBar position="static">
      <Toolbar>
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


function DrawerBar(props) {
  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    props.onClick(open);
  };

  const list = () => (
    <div 
    className={clsx(classes.list)} 
    role="presentation" 
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key={'Home'}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button key={'Hotkeys'}>
          <ListItemIcon><KeyboardIcon /></ListItemIcon>
          <ListItemText primary={'Hotkeys'} />
        </ListItem>
        <ListItem button key={'Upload'}>
          <ListItemIcon><PublishIcon /></ListItemIcon>
          <ListItemText primary={'Upload'} />
        </ListItem>
        <ListItem button key={'Settings'}>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary={'Settings'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={'About'}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary={'About'} />
        </ListItem>
        <ListItem button key={'Close'}>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary={'Close'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <Drawer open={props.drawer} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
    </div>
  );
}



export default class GUIMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Test",
      drawer: false,
    };
  }

  handleMenuToggleClick() {
    this.setState({drawer: !this.state.drawer})
  }

  renderMenuBar() {
    return(
      <MenuBar
        page={this.state.page}
        onClick={() => this.handleMenuToggleClick()}
        />
    )
  }

  renderDrawerBar() {
    return(
      <DrawerBar
        drawer={this.state.drawer}
        onClick={() => this.handleMenuToggleClick()}
        />
    )
  }

  render() {
    //this.state.page = "Bla"; Hier mache ich Sachen, die Festlegen auf welcher Seite ich gerade bin
    //if(this.state.menu) { drawerbar = DrawerBar(); }
    return(
      <div>
        <div>
          <div className="MenuBar">{this.renderMenuBar()}</div>
          <div>HIER IST DER CONTENT</div>
        </div>
        <div className="DrawerBar">{this.renderDrawerBar()}</div>
      </div>
    );
  }
}