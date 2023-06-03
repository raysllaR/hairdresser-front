import React from "react";
import logo from "../../../assets/images/logo.svg";
import "./style.css";

const Logo: React.FC = () => {
	return (
		<div className="container-logo">
			<img
				className="logo-img"
				src={logo}
				alt="Hero Hairdresser Logo"
			/>
			<span>Hero Hairdresses</span>
		</div>
	);
};

export default Logo;
