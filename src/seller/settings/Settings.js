import React, { useState, useRef, useContext } from "react";
import ButtonComponent from '../../shared/components/UIElements/Button';
import CardComponent from '../../shared/components/UIElements/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInput from '../../shared/components/Forms/FormInput';
import Form, { FormContext } from '../../shared/components/Forms/Form';
import { useHttpClient } from '../../shared/hooks/http-hook.js'
import { AuthContext } from '../../shared/context/auth-context';
import "react-datepicker/dist/react-datepicker.css";


import "./Settings.css";

const Settings = () => {
    return (
        <div>
            <h1>Settings</h1>
            <Form
                submit={(form) => {
                    alert(`Domain name is ${form.domain} and contract address is ${form.contractAddress}`);
                }}
                initialValues={{
                    domain: '',
                    contractAddress: ''
                }}
                buttonText='Save'
                buttonType='save'>
                <div>
                    <FormInput className="domain" name="domain" placeholder="Connect with custom domain" />
                </div>
                <div>
                    <FormInput className="contractaddress" name="contractaddress" placeholder="Enter in NFT collection address" />
                </div>
            </Form>
        </div>
    );
}

export default Settings;