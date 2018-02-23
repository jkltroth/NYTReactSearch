import React from "react";
import AppBar from 'material-ui/AppBar';

function handleClick() {
  // this needs to be updated to route to '/'
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Nav = () => (
  <AppBar
    title={<span style={styles.title}>New York Times Search</span>}
    showMenuIconButton={false}
    onTitleClick={handleClick}
  />
);

export default Nav;
