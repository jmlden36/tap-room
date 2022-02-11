import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h2>Pints left: {props.pintsLeft}</h2>
      <h3>{props.brand} - {props.name}</h3>
      <h4>Price: $ {props.price}</h4>
      <h4>Alcohol Content: {props.alcoholContent}%</h4>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg from List</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;