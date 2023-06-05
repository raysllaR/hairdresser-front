import { ButtonBase } from "@mui/material";
import InputIcon from "../inputIcon";
import InputIconPassword from "../inputIconPassword";
import React from "react";
import iconPerson from "../../../assets/images/icons/person.svg";
import iconMail from "../../../assets/images/icons/mail.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

const FormCadastroRapido: React.FC = () => {
	const navigate = useNavigate();
	const cadastrar = (): void => {
		navigate("/login");
	};

	return (
		<form
			id="form-cadastro-rapido"
			action=""
			onSubmit={cadastrar}>
			<div className="container-inputs">
				<InputIcon
					placeholder="Nome"
					startAdornmentImgPath={iconPerson}
				/>
				<InputIcon
					placeholder="Email"
					startAdornmentImgPath={iconMail}
				/>
				<InputIconPassword />
			</div>

			<ButtonBase
				className="button"
				type="submit">
				Cadastrar
			</ButtonBase>
		</form>
	);
};

export default FormCadastroRapido;
