import './FormInput.css';
import React, { useState, useContext } from 'react';
import { FormContext } from './Form';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


function FormInput(props) {
  const { className, type = 'text', name, placeholder } = props;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;


  return (
    <div className={className} >
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleFormChange}
        placeholder={placeholder}
      />
      
    </div>
    
  )
}

export default FormInput;