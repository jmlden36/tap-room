import React from "react";
import PropTypes from "prop-types";
const detailCard = {
  border: '2px solid black',
  color: 'black',
  borderRadius: '5px',
  backgroundColor: 'cornSilk',
  textAlign: 'center',
  maxWidth: '50vw'
}

function KegDetail(props){
  const { keg } = props;
  return (
    <React.Fragment>
      <div style={detailCard}>
      <h2>Pints left: {keg.pintsLeft}</h2>
      <h3>{keg.brand} - {keg.name}</h3>
      <h4>Price: $ {keg.price}</h4>
      <h4>Alcohol Content: {keg.alcoholContent}%</h4>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> props.onClickingDelete(keg.id) }>Delete Keg from List</button>
      </div>
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