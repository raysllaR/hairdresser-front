import React from "react";
import logo from "../../../assets/images/logo.svg";
import logoWhite from "../../../assets/images/logo-white.svg";
import "./style.css";

type TFlexDirection = "row" | "column";
type TTheme = "colorful" | "white";
interface ILogo {
	direction?: TFlexDirection;
	theme?: TTheme;
}

const Logo: React.FC<ILogo> = ({ direction = "row", theme = "white" }) => {
	return (
		<div
			className="container-logo"
			style={{ flexDirection: direction }}>
			<img
				style={{ width: direction === "row" ? 40 : "fit-content" }}
				className="logo-img"
				src={theme === "colorful" ? logo : logoWhite}
				alt="Hero Hairdresser Logo"
			/>
			<span style={{ fontSize: direction === "row" ? "1rem" : "1.5rem" }}>
				Hero Hairdresses
			</span>
		</div>
	);
};

export default Logo;
