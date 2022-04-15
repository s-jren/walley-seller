import React, { useState } from 'react';
import './Form.css';
import './Button.js'
import Button from './Button.js';


export const FormContext = React.createContext({
    form: {},
    handleFormChange: () => { }
});

function Form(props) {
    const { children, submit, buttonText, buttonType = () => { } } = props;

    const [form, setForm] = useState({
        // listTitle: '',
        // description: '',
        // listingPrice: '',
        // numberReleased: '',
        // date: '',
        // time: ''
    });

    const handleFormChange = (event) => {
        // Get the name of the field that caused this change event
        // Get the new value of this field
        const { name, value } = event.target;

        // Assign new value to the appropriate form field
        const updatedForm = {
            ...form,
            [name]: value
        };

        console.log('Form changed: ', updatedForm);

        // Update state
        setForm(updatedForm);
    };

    // children can access from and handleFormChange
    return (

        <form className="Form">
            <FormContext.Provider value={{ form, handleFormChange, buttonText, buttonType }}>
                {children}
            </FormContext.Provider>

            <Button handleClick={() => submit(form)} type = {buttonType}>{props.buttonText}</Button>
                
        </form>

    );
}

export default Form;