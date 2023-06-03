import React from "react";
import Card from "@mui/material/Card";
import "./index.css";
import { CardContent } from "@mui/material";
import logo from "../../../assets/images/logo.svg";
import FormLogin from "../../shared/formLogin";

const Login: React.FC = () => {
	return (
		<div id="app">
			<div className="container">
				<div className="container-logo">
					<img
						className="logo-img"
						src={logo}
						alt="Hero Hairdresser Logo"
					/>
					<span>Hero Hairdresses</span>
				</div>
				<Card className="card">
					<CardContent className="card-content">
						<span className="title">Olá! Seja Bem-Vindo!</span>
						<FormLogin />
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
