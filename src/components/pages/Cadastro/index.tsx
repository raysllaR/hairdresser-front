import React from "react";
import CardComponent from "../../shared/CardComponent";
import FormCadastroRapido from "../../shared/formCadastroRapido";
import imgLogo from "../../../assets/images/logos/logo.svg";
import { Link } from "react-router-dom";
import "./style.css";

const Cadastro: React.FC = () => {
	return (
		<div
			className="page"
			id="cadastro">
			<div className="container-cadastro">
				<div className="navigator">
					<Link to={"/login"}>Home</Link> {">"} Área de cadastro
				</div>
				<div className="container">
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
			</div>
		</div>
	);
};

export default Cadastro;
