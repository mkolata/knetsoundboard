import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import GuiHome from './home';
import GUIhotkeys from './hotkeys';
import { ThemeProvider } from '@material-ui/styles';

import light from './light'
import dark from './dark'
import MenuBar from './MenuBar'
import DrawerBar from './DrawerBar'

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
