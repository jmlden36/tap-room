import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  return (
    <React.Fragment>
      <h2>Pints left: {keg.pintsLeft}</h2>
      <h3>{keg.brand} - {keg.name}</h3>
      <h4>Price: $ {keg.price}</h4>
      <h4>Alcohol Content: {keg.alcoholContent}%</h4>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> props.onClickingDelete(keg.id) }>Delete Keg from List</button>
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