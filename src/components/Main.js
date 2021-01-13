import React from 'react';
import { useState } from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';
import PageHome from './SubpageHome/PageHome';
import PageUpload from './SubpageUpload/PageUpload';

export default function Main() {
  const [drawer, setDrawer] = useState(false);
  const [page, setPage] = useState("Soundboard");

  function pageSelector() {
    switch(page){
      case 'Soundboard':
        return <PageHome/>;
      case 'Upload':
        return <PageUpload/>;
      default:
        return 'UI Error!';
    }
  }

  return(
    <div>
      <div>
      <AppBar page={page} onClick={() => setDrawer(!drawer)}/>
      <Drawer drawer={drawer} onClick={() => setDrawer(!drawer)} handleMenuClick={(name) => { setPage(name) }}/>
      </div>
      <div>
       {pageSelector()}
      </div>
    </div>
  );

}