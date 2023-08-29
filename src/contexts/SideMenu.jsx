import { useCallback } from 'react';
import { useState } from 'react';

function SideMenu() {
  const displayState = true;
  const [displaySideMenu, setDisplaySideMenu] = useState(displayState);

  useCallback(() => {
    setDisplaySideMenu(!displayState);
  }, [displaySideMenu]);

  return <div>SideMenu</div>;
}

export default SideMenu;
