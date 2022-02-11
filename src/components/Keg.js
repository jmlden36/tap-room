import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h2>Pints left: {prop.pintsLeft}</h2>
        <h3>{props.brand} - {props.name}</h3>
        <h4>Price: $ {prop.price}</h4>
        <h4>Alcohol Content: {prop.alcoholContent}%</h4>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  whenKegClicked: PropTypes.func
};

export default Keg;