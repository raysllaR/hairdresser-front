import Header from "../../shared/Header";
import React from "react";
import "./style.css";
import InputLabel from "../../shared/inputLabel";
import ButtonComponent from "../../shared/ButtonComponent";
import ImageUpload from "../../shared/ImageUpload";
import PageContainer from "../../shared/PageContainer";

const EditarPerfil: React.FC = () => {
	return (
		<PageContainer
			idPage="editar-perfil"
			classNameContainer="body">
			<Header />
			<h2 className="title">Editar Perfil</h2>
			<ImageUpload />
			<form
				action=""
				className="form">
				<InputLabel label="Nome" />
				<InputLabel
					label="Email"
					type="email"
				/>
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
				<div className="container-buttons">
					<ButtonComponent
						text="Cancelar"
						type="reset"
						className="reverse"
					/>
					<ButtonComponent
						text="Confirmar"
						type="submit"
					/>
				</div>
			</form>
		</PageContainer>
	);
};

export default EditarPerfil;
