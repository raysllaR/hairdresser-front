import React from "react";
import Card from "@mui/material/Card";
import "./index.css";
import { ButtonBase, CardContent, InputBase } from "@mui/material";
import logo from "../../../assets/images/logo.svg";
import iconMail from "../../../assets/images/icons/mail.svg";
import iconkey from "../../../assets/images/icons/key.svg";
import iconVisibility from "../../../assets/images/icons/visibility.svg";

const Login: React.FC = () => {
	return (
		<div id="app">
			<div className="container">
				<div className="container-logo">
					<img
						className="logo-img"
						src={logo}
					/>
					<span>Hero Hairdresses</span>
				</div>
				<Card className="card">
					<CardContent className="card-content">
						<span className="title">Olá! Seja Bem-Vindo!</span>
						<form
							className="form"
							action="">
							<InputBase
								id="email-input"
								className="input"
								type="email"
								placeholder="E-mail"
								startAdornment={
									<img
										className="icon"
										src={iconMail}
									/>
								}
							/>

							<InputBase
								id="email-input"
								className="input"
								placeholder="Senha"
								type="password"
								startAdornment={
									<img
										className="icon"
										src={iconkey}
									/>
								}
								endAdornment={
									<img
										className="icon"
										src={iconVisibility}
									/>
								}
							/>

							<ButtonBase
								className="button"
								type="submit">
								Entrar
							</ButtonBase>
						</form>

						<div className="more">
							<span>
								Esqueceu sua senha? <a href="">Recuperar</a>
							</span>
							<span>
								Ainda não tem conta? <a href="">Cadastre-se</a>
							</span>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Login;
