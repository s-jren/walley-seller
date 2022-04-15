import React, { useState, useRef, useContext } from "react";
import ButtonComponent from '../../shared/components/UIElements/Button';
import CardComponent from '../../shared/components/UIElements/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInput from '../../shared/components/Forms/FormInput';
import Form, { FormContext } from '../../shared/components/Forms/Form';
import { useHttpClient } from '../../shared/hooks/http-hook.js'
import { AuthContext } from '../../shared/context/auth-context';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker'

import "./LoginScreen.css";

const LoginScreen = () => {
    return (
        <div>
            <h1>Log In</h1>
            <Form
                submit={(form) => {
                    alert(`Logged in as ${form.username}!`);
                }}
                initialValues={{
                    username: '',
                    password: ''
                }}
                buttonText='Submit'
                buttonType='submit'>
                <div>
                    <FormInput className="username" name="username" placeholder="Username" />
                </div>
                <div>
                    <FormInput className="password" name="password" placeholder="Password" />
                </div>
            </Form>
        </div>
    );
}

export default LoginScreen;