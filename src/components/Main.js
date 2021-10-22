import React from 'react';
import { useState } from 'react';
import AppBar from './AppBar';
import Drawer from './Drawer';
import HomePage from './SubpageHome/HomePage';
import UploadPage from './SubpageUpload/UploadPage';

export default function Main() {
  const [drawer, showDrawer] = useState(false);
  const [pageName, setPageName] = useState("Soundboard");

  function pageContent() {
    switch(pageName){
      case 'Soundboard':
        return <HomePage/>;
      case 'Upload':
        return <UploadPage/>;
      default:
        return 'UI Error!';
    }
  }

  return(
    <div>
      <div>
      <AppBar pageName={pageName} onAppBarButtonClick={() => showDrawer(!drawer)}/>
      <Drawer drawer={drawer} onDrawerClick={() => showDrawer(!drawer)} handleMenuClick={(name) => { setPageName(name); showDrawer(!drawer); }}/>
      </div>
      <div>
       {pageContent()}
      </div>
    </div>
  );

}