import React, { useEffect } from "react";
import { ButtonBase } from "@mui/material";
import iconMail from "../../../assets/images/icons/mail.svg";
import InputIcon from "../inputIcon";
import InputIconPassword from "../inputIconPassword";
import "./style.css";
import { useNavigate } from "react-router-dom";

const FormLogin: React.FC = () => {
	const navigate = useNavigate();
	const logar = (): void => {
		localStorage.setItem("login", "logado");
		navigate("/");
	};

	return (
		<form
			id="form-login"
			action=""
			onSubmit={logar}>
			<div className="container-form-login">
				<InputIcon
					type="email"
					placeholder="Email"
					startAdornmentImgPath={iconMail}
				/>
				<InputIconPassword />
			</div>

			<ButtonBase
				className="button"
				type="submit">
				Entrar
			</ButtonBase>
		</form>
	);
};

export default FormLogin;
