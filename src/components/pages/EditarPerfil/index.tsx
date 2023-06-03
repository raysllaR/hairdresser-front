import Header from "../../shared/Header";
import React from "react";
import "./style.css";
import InputLabel from "../../shared/inputLabel";

const EditarPerfil: React.FC = () => {
	return (
		<div
			id="editar-perfil"
			className="page">
			<Header />
			<form action="">
				<InputLabel label="Nome" />
				<InputLabel label="E-mail" />
				<InputLabel
					label="Senha atual"
					type="password"
				/>
				<InputLabel
					label="Nova atual"
					type="password"
				/>
				<InputLabel
					label="Confirmar senha"
					type="password"
				/>
			</form>
		</div>
	);
};

export default EditarPerfil;
