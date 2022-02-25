 import React, {Component, useState} from 'react'
 import './App.css'
 import {ethers} from 'ethers'
 import { Redirect } from 'react-router-dom';
 import LandingPage from './LandingPage'
import Navbar from './Navbar';
import CSVReader from 'react-csv-reader'
import ParticleSettings from './ParticleSettings.js';
import './Main.css';
import img from './img.svg';

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
            {/* <ParticleSettings/> */}
            {/* <h3>Address: {defaultAccount}</h3> */}
            {/* <Navbar account= {defaultAccount} /> */}
            {/* <button  style={{background_color : 'white'}} onClick={connectWalletHandler}>{connButtonText}</button> */}
            
            {/* <LandingPage/> */}
            {/* <CSVReader onFileLoaded={(data, fileInfo, originalFile) => console.dir(data.toString())} /> */}
            <body>

        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo">Account No:  {defaultAccount} </a>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <div className="nav__close" id="nav-close">
                        <i className='bx bx-x'></i>
                    </div>

                    <ul className="nav__list">
                    <button  className='home__button' onClick={connectWalletHandler}>{connButtonText}</button>
                    
                    </ul>
                </div>
            </nav>
        </header>

        <main className="l-main">
            <section className="home" id="home">
                <div className="home__container bd-grid">
                    <div className="home__img">
                        <img src={img} alt="" data-speed="-2" className="move"/>
                    </div>

                    <div className="home__data">
                        <h1 className="home__title">Incentivised <br/>Data Sharing <br/></h1>
                        <div className='home__button'>
                        <CSVReader  onFileLoaded={(data, fileInfo, originalFile) => console.dir(data.toString())} />
                         </div>
                        
                        

                    </div>
                </div>
            </section>
        </main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>

        <script src="assets/js/main.js"></script>
    </body>
            
            </div>
            
        )
     
 }

 export default App;