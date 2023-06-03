import React from "react";
import { ButtonBase } from "@mui/material";
import iconMail from "../../../assets/images/icons/mail.svg";

import "./style.css";
import InputIcon from "../inputIcon";
import InputIconPassword from "../inputIconPassword";

const FormLogin: React.FC = () => {
	return (
		<form action="">
			<InputIcon
				type="email"
				placeholder="Email"
				startAdornmentImgPath={iconMail}
			/>
			<InputIconPassword />

			<ButtonBase
				className="button"
				type="submit">
				Entrar
			</ButtonBase>
		</form>
	);
};

export default FormLogin;
