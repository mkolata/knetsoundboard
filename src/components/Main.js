import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import WindowSoundboard from './WindowSoundboard';
import WindowHotkeys from './WindowHotkeys';
import { ThemeProvider } from '@material-ui/styles';

import ThemeLight from './ThemeLight'
import ThemeDark from './ThemeDark'
import MenuBar from './MenuBar'
import DrawerBar from './DrawerBar'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Soundboard',
      pagecontent: <WindowSoundboard/>,
      drawer: false,
      height: window.innerHeight,
      width: window.innerWidth,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  handleMenuToggleClick() {
    this.setState({drawer: !this.state.drawer})
  }

  handleMenuClick = name => () => {
    this.setState({page: 'name'})
  };

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
        return <WindowHotkeys/>
      default:
        return <WindowSoundboard/>
    }
  }

  render() {
    return(
      <React.Fragment>
        <ThemeProvider theme={ThemeLight}>
        <CssBaseline />
          <div>
            <div className="MenuBar">
              <MenuBar page={this.state.page} onClick={(role) => this.handleMenuToggleClick(role)}/>
            </div>
            <Container id="blub" maxWidth="100%" disableGutters="true">
              <Typography component="div" style={{ height: window.innerHeight-48}}>
                {this.menuSelector()}
              </Typography>
            </Container>
          </div>
          <div className="DrawerBar"> 
            <DrawerBar drawer={this.state.drawer} onClick={() => this.handleMenuToggleClick()} handleMenuClick={(name) => {this.setState({page: name})}}/>
          </div>
          </ThemeProvider>
      </React.Fragment>
    );
  }
}
