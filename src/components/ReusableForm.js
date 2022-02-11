import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name'
          autoFocus='autofocus'
          required/>
        <input
          type='text'
          name='brand'
          placeholder='Brand' required/>
        <input
          type='number'
          name='price'
          placeholder='Price' required/>
        <input
          type='number'
          name='alcoholContent'
          placeholder='Alcohol Content %' required/>
        <input
          type='number'
          name='pintsLeft'
          placeholder='Pints Left' required/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;