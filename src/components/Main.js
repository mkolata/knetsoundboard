import React from 'react';
import { useState } from 'react';
import AppBar from './AppBar'
import Drawer from './Drawer'

export default function Main() {
  const [drawer, setDrawer] = useState(false);

  return(
    <div>
      <AppBar onClick={() => setDrawer(!drawer)}/>
      <Drawer drawer={drawer} onClick={() => setDrawer(!drawer)} />
    </div>
  );

}