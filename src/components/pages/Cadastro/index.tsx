import React from "react";
import CardComponent from "../../shared/CardComponent";
import FormCadastroRapido from "../../shared/formCadastroRapido";
import imgLogo from "../../../assets/images/logos/logo.svg";
import { Link } from "react-router-dom";
import "./style.css";
import PageContainer from "../../shared/PageContainer";

const Cadastro: React.FC = () => {
	return (
		<PageContainer
			idPage="cadastro"
			classNameContainer="container">
			<p className="navigator">
				<Link to={"/login"}>Home</Link> {">"} Área de cadastro
			</p>
			<div className="body">
				<img
					src={imgLogo}
					alt="Logo"
				/>
				<CardComponent>
					<h1>Área de Cadastro</h1>
					<FormCadastroRapido />
					<div className="links">
						<span>
							Já tem cadastro? <a href="">Voltar à Página Inicial</a>
						</span>
					</div>
				</CardComponent>
			</div>
		</PageContainer>
	);
};

export default Cadastro;
