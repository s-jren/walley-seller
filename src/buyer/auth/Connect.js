import React, {useContext, useState} from "react";
import Web3 from 'web3';

import { AuthContext } from "../../shared/context/auth-context";

const Connect = (props) => {
    console.log("Connect");

    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

    const [loading, setLoading] = useState(false);

    const auth = useContext(AuthContext);

    const handleAuthenticate = ({
		publicAddress,
		signature,
	}) =>
		fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
			body: JSON.stringify({ publicAddress, signature }),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		}).then((response) => response.json());

    const handleSignMessage = async ({
		publicAddress,
		nonce,
	}) => {
		try {
			const signature = await web3.eth.personal.sign(
				`I am signing my one-time nonce: ${nonce}`,
				publicAddress,
				'' // MetaMask will ignore the password argument here
			);

			return { publicAddress, signature };
		} catch (err) {
			throw new Error(
				'You need to sign the message to be able to log in.'
			);
		}
	};

    const handleSignup = (publicAddress) =>
		fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
			body: JSON.stringify({ publicAddress }),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		}).then((response) => response.json());
    
    const buttonClick = async() => {
        console.log("button clicked");

        // Check if MetaMask is installed
        if (!window.ethereum) {
            window.alert('Please install MetaMask first.');
            return;
        }

        if (!web3) {
            try {
                // Request account access if needed
                await window.ethereum.enable();

                // We don't know window.web3 version, so we use our own instance of Web3
                // with the injected provider given by MetaMask
                web3 = new Web3(window.ethereum);
            } catch (error) {
                window.alert('You need to allow MetaMask.');
                return;
            }
        }

        const coinbase = await web3.eth.getCoinbase();
        if (!coinbase) {
            window.alert('Please activate MetaMask first.');
            return;
        }

        const publicAddress = coinbase
        setLoading(true);

        // Look if user with current publicAddress is already present on backend
        fetch(
            `${process.env.REACT_APP_BACKEND_URL}/deuser/${publicAddress}`
        )
            .then((response) => response.json())            
            // Popup MetaMask confirmation modal to sign message
            .then(handleSignMessage)
            // Send signature to backend on the /auth route
            .then(handleAuthenticate)
            // Pass accessToken back to parent component (to save it in localStorage)
            .then(auth.login(publicAddress))
            .catch((err) => {
                window.alert(err);
                setLoading(false);
            });
        
    };

    return (
        <React.Fragment>
            <div className="container">
            <button onClick={buttonClick} type="button" className="btn btn-secondary">Secondary</button>
            </div>
        </React.Fragment>
    );
}

export default Connect;