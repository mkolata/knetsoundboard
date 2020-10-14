import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Drawer from '@material-ui/core/Drawer';
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

import GuiHome from './home';
import GUIhotkeys from './hotkeys';

import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import light from './light'
import dark from './dark'


function MenuBar(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
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

  let menu1 = {
    1: ['Soundboard',<HomeIcon />],
    2: ['Hotkeys',<KeyboardIcon />],
    3: ['Upload',<PublishIcon />],
    4: ['Settings',<SettingsIcon />],
 }

  const list = () => (
    <div 
    className={clsx(classes.list)} 
    role="presentation" 
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
    >
      <List>
      {Object.keys(menu1).map((text, index) => (
          <ListItem button key={menu1[text][0]} onClick={() => props.handleMenuClick(menu1[text][0])}>
            <ListItemIcon>{menu1[text][1]}</ListItemIcon>
            <ListItemText primary={menu1[text][0]} />
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
  );

  return (
    <div>
        <Drawer open={props.drawer} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
    </div>
  );
}

export default class GuiMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Soundboard',
      pagecontent: <GuiHome/>,
      drawer: false,
      height: window.innerHeight,
      width: window.innerWidth,
      count: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  handleMenuToggleClick() {
    this.setState({drawer: !this.state.drawer})
  }

  handleMenuClick = name => () => {
    this.setState({page: 'name'})
  };

  renderMenuBar() {
    return(
      <MenuBar
        page={this.state.page}
        onClick={(role) => this.handleMenuToggleClick(role)}
        />
    )
  }

  renderDrawerBar() {
    return(
      <DrawerBar
        drawer={this.state.drawer}
        onClick={() => this.handleMenuToggleClick()}
        handleMenuClick={(name) => {this.setState({page: name})}} //this.menuSelector({page: name})
        />
    )
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth
    });
  }

  menuSelector() {
    switch(this.state.page) {
      case 'Hotkeys':
        return <GUIhotkeys/>
      default:
        return <GuiHome/>
    }
  }

  render() {
    this.state.count++;
    return(
      <React.Fragment>
        <ThemeProvider theme={light}>
        <CssBaseline />
          <div>
            <div className="MenuBar">{this.renderMenuBar()}</div>
            <Container id="blub" maxWidth="100%" disableGutters="true">
              <Typography component="div" style={{ height: window.innerHeight-48}}>
              {this.menuSelector()}
              </Typography>
            </Container>
          </div>
          <div className="DrawerBar">{this.renderDrawerBar()}</div>
          </ThemeProvider>
      </React.Fragment>
    );
  }
}
