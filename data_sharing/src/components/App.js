 import React, {Component, useState} from 'react'
 import './App.css'
 import {ethers} from 'ethers'
 import { Redirect } from 'react-router-dom';
 import LandingPage from './LandingPage'
import Navbar from './Navbar';
import CSVReader from 'react-csv-reader'

 const App = () =>  {
     
        const [errorMessage, setErrorMessage] = useState(null);
        const [defaultAccount, setDefaultAccount] = useState(null);
        const [userBalance, setUserBalance] = useState(null);
        const [connButtonText, setConnButtonText] = useState('Connect Wallet');

        const connectWalletHandler = () => {
            if (window.ethereum && window.ethereum.isMetaMask) {
                console.log('MetaMask Here!');
    
                window.ethereum.request({ method: 'eth_requestAccounts'})
                .then(result => {
                    accountChangedHandler(result[0]);
                    setConnButtonText('Wallet Connected');
                    getAccountBalance(result[0]);
                })
                .catch(error => {
                    setErrorMessage(error.message);
                
                });

            } else {
                console.log('Need to install MetaMask');
                setErrorMessage('Please install MetaMask browser extension to interact');
            }
        }
    
        // update account, will cause component re-render
        const accountChangedHandler = (newAccount) => {
            setDefaultAccount(newAccount);
            getAccountBalance(newAccount.toString());
        }
    
        const getAccountBalance = (account) => {
            window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
            .then(balance => {
                setUserBalance(ethers.utils.formatEther(balance));
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
        };
    
        const chainChangedHandler = () => {
            // reload the page to avoid any errors with chain change mid use of application
            window.location.reload();
        }
    
    
        // listen for account changes
        window.ethereum.on('accountsChanged', accountChangedHandler);
    
        window.ethereum.on('chainChanged', chainChangedHandler);
        return (
            
            <div>
            <h1> Hey There...</h1>
            
            {/* <h3>Address: {defaultAccount}</h3> */}
            <Navbar account= {defaultAccount} />
            <button onClick={connectWalletHandler}>{connButtonText}</button>
            {/* <LandingPage/> */}
            <CSVReader onFileLoaded={(data, fileInfo, originalFile) => console.dir(data.toString())} />
            </div>
        )
     
 }

 export default App;