import React, { useLayoutEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import WindowSoundboard from './WindowSoundboard';
import WindowHotkeys from './WindowHotkeys';
import { ThemeProvider } from '@material-ui/styles';
import debounce from 'lodash.debounce';

import ThemeLight from './ThemeLight'
//import ThemeDark from './ThemeDark'
import MenuBar from './MenuBar'
import DrawerBar from './DrawerBar'

function menuSelector(page) {
  switch (page) {
    case 'Hotkeys':
      return <WindowHotkeys />
    default:
      return <WindowSoundboard />
  }
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]); 
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Main() {
  const [page, setPage] = useState('Soundboard');
  const [drawer, setDrawer] = useState(false);
  const [width, height] = useWindowSize();

  return (
    <React.Fragment>
      <ThemeProvider theme={ThemeLight}>
        <CssBaseline />
        <div>
          <div className="MenuBar">
            <MenuBar page={page} onClick={() => setDrawer(!drawer)} />
          </div>
          <Container maxWidth="100%" disableGutters="true">
            <Typography component="div" style={{ height: window.innerHeight - 48 }}>
              {menuSelector(page)}
            </Typography>
          </Container>
        </div>
        <div className="DrawerBar">
          <DrawerBar drawer={drawer} onClick={() => setDrawer(!drawer)} handleMenuClick={(name) => { setPage(name) }} />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}
