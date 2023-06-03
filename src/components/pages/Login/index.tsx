import React from "react";
import FormLogin from "../../shared/formLogin";
import CardComponent from "../../shared/CardComponent";
import "./index.css";
import Logo from "../../shared/Logo";

const Login: React.FC = () => {
	return (
		<div id="app">
			<div className="container">
				<Logo />
				<CardComponent>
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
				</CardComponent>
			</div>
		</div>
	);
};

export default Login;
