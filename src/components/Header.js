import React from "react";

const header = {
  color: 'white',
  textAlign: 'center',
  textShadow: '3px 2px black'
}

function Header () {
  return (
    <React.Fragment>
      <h1 style={header}>The Grey Toad Tap Room</h1>
    </React.Fragment>
  );
}

export default Header;