import React from "react";
import "./style.css";
import Logo from "../../shared/Logo";
import CardComponent from "../../shared/CardComponent";
import FormCadastroRapido from "../../shared/formCadastroRapido";

const Cadastro: React.FC = () => {
	return (
		<div className="cadastro">
			<div className="container-cadastro">
				<div className="cadastro-navigator">
					<a href="">Home</a> > Área de cadastro
				</div>
				<Logo />
				<CardComponent>
					<span className="title">Área de Cadastro</span>
					<FormCadastroRapido />
					<div className="more">
						<span>
							Já tem cadastro? <a href="">Voltar à Página Inicial</a>
						</span>
					</div>
				</CardComponent>
			</div>
		</div>
	);
};

export default Cadastro;
