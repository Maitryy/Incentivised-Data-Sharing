import React, {useState} from 'react'
import {ethers} from 'ethers'
import './LandingPage.css'
import ReactDOM from 'react-dom';

const LandingPage = () => {
	const Header = (props) => {
		return (
		  <header>
			<h2 className="logo">{props.brand}</h2>
			<div
			  onClick={() => {
				props.setActiveClass(!props.activeClass);
			  }}
			  className={props.activeClass ? "toggle active" : "toggle"}
			></div>
		  </header>
		);
	  };
	  
	  const Contents = (props) => {
		return (
		  <div class="text">
			<h2> {props.title} </h2>
			<h3> {props.subtitle} </h3>
			<p> {props.content} </p>
			<a href="#">Browse</a>
		  </div>
		);
	  };
	  
	  const Image = () => {
		return <img src="https://i.ytimg.com/vi/-MKapbz0GIo/maxresdefault.jpg" />;
	  };
	  
	  const Overlay = () => {
		return <div className="overlay"> </div>;
	  };
	  
	  const Footer = (props) => {
		return (
		  <div className="footer">
			{" "}
			<p>{props.content} </p>{" "}
		  </div>
		);
	  };
	  const Menu = () => {
		return (
		  <div className="menu">
			<ul>
			  <li>
				<a href="#"> Home </a>
			  </li>
			  <li>
				<a href="#"> Home </a>
			  </li>
			  <li>
				<a href="#"> Home </a>
			  </li>
			</ul>
		  </div>
		);
	  };
	  const App = () => {
		const [activeClass, setActiveClass] = React.useState(false);
	  
		return (
		  <div>
			<section className={activeClass ? "active container" : "container"}>
			  <Header
				setActiveClass={setActiveClass}
				activeClass={activeClass}
				brand="brand"
			  />
			  <Image />
			  <Overlay />
			  <Contents
				title="our brand"
				subtitle="The best"
				content="Lorem ipsum dolor"
			  />
			  <Footer content="Copyright 2021" />
			</section>
	  
			<Menu />
		  </div>
		);
	  };
	  
	  ReactDOM.render(<App />, document.getElementById("root"));
	  

	
	return (
		<div className='landingPage'>
		{/* <h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {userBalance}</h3>
			</div>
			{errorMessage} */}
            <div id="root"></div>
		</div>
	);
}

export default LandingPage;