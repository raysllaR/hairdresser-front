import React, { useEffect } from "react";
import FormLogin from "../../shared/formLogin";
import CardComponent from "../../shared/CardComponent";
import imgLogo from "../../../assets/images/logos/logo.svg";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
	const navigate = useNavigate();

	useEffect((): void => {
		const isLogin: boolean = localStorage.getItem("login") !== null;

		if (isLogin) {
			navigate("/");
		}
	}, []);

	return (
		<div
			id="login"
			className="page">
			<div className="container">
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
		</div>
	);
};

export default Login;
