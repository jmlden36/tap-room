import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  const card = {
    border: '2px solid black',
    color: 'black',
    borderRadius: '5px',
    backgroundColor: 'cornSilk',
    textAlign: 'center',
    maxWidth: '50vw'
  }
  const almostOut = {
    color: 'red'
  }

  if (props.pintsLeft <= 0) {
    return (
      <React.Fragment>
        <div style={card}>          
          <h3>{props.brand} - {props.name}</h3>
          <h4>Price: $ {props.price}</h4>
          <h4>Alcohol Content: {props.alcoholContent}%</h4>
          <h2 style={almostOut}>Sold Out</h2>
          <button onClick={() => props.whenKegClicked(props.id)}>View Details</button>
        </div>
      </React.Fragment>
    );
  } else if (props.pintsLeft < 10) {
    return (
      <React.Fragment>
        <div style={card}>          
          <h3>{props.brand} - {props.name}</h3>
          <h4>Price: $ {props.price}</h4>
          <h4>Alcohol Content: {props.alcoholContent}%</h4>
          <h2 style={almostOut}>Pints left: {props.pintsLeft}</h2>
          <h2>Almost Empty!</h2>
          <button onClick={() => props.whenKegClicked(props.id)}>View Details</button>
          <button onClick={() => props.onClickSell(props.id)}>Sell Pint</button>
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div style={card}>        
        <h3>{props.brand} - {props.name}</h3>
        <h4>Price: $ {props.price}</h4>
        <h4>Alcohol Content: {props.alcoholContent}%</h4>
        <h3>Pints left: {props.pintsLeft}</h3>
        <button onClick={() => props.whenKegClicked(props.id)}>View Details</button>
        <button onClick={() => props.onClickSell(props.id)}>Sell Pint</button>
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
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onClickSell: PropTypes.func
};

export default Keg;