import { ButtonBase } from "@mui/material";
import InputIcon from "../inputIcon";
import InputIconPassword from "../inputIconPassword";
import React from "react";
import iconPerson from "../../../assets/images/icons/person.svg";
import iconMail from "../../../assets/images/icons/mail.svg";

const FormCadastroRapido: React.FC = () => {
	return (
		<form action="">
			<InputIcon
				placeholder="Nome"
				startAdornmentImgPath={iconPerson}
			/>
			<InputIcon
				placeholder="Email"
				startAdornmentImgPath={iconMail}
			/>
			<InputIconPassword />

			<ButtonBase
				className="button"
				type="submit">
				Cadastrar
			</ButtonBase>
		</form>
	);
};

export default FormCadastroRapido;
