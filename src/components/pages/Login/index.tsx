import React, { useEffect } from "react";
import FormLogin from "../../shared/formLogin";
import CardComponent from "../../shared/CardComponent";
import imgLogo from "../../../assets/images/logos/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import PageContainers from "../../shared/PageContainer";
import "./index.css";

const Login: React.FC = () => {
	const navigate = useNavigate();

	useEffect((): void => {
		const isLogin: boolean = localStorage.getItem("login") !== null;

		if (isLogin) {
			navigate("/");
		}
	}, []);

	return (
		<PageContainers
			classNamePage="login"
			classNameContainer="container">
			<div className="login-itens">
				<img
					src={imgLogo}
					alt="Logo"
				/>
				<CardComponent>
					<h1 className="title">Olá! Seja Bem-Vindo!</h1>
					<FormLogin />
					<div className="links">
						<span>
							Esqueceu sua senha? <Link to="/">Recuperar</Link>
						</span>
						<span>
							Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link>
						</span>
					</div>
				</CardComponent>
			</div>
		</PageContainers>
	);
};

export default Login;
