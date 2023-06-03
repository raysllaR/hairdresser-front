import React from "react";
import "./style.css";
import Logo from "../../shared/Logo";
import CardComponent from "../../shared/CardComponent";
import iconPerson from "../../../assets/images/icons/person.svg";
import iconMail from "../../../assets/images/icons/mail.svg";

import InputIcon from "../../shared/inputIcon";
import InputIconPassword from "../../shared/inputIconPassword";
const Cadastro: React.FC = () => {
	return (
		<div className="cadastro">
			<div className="container-cadastro">
				<Logo />
				<CardComponent>
					<form action="">
						<InputIcon
							placeholder="Nome"
							startAdornmentImgPath={iconPerson}
						/>
						<InputIcon
							placeholder="Email"
							startAdornmentImgPath={iconPerson}
						/>
						<InputIconPassword />
					</form>
				</CardComponent>
			</div>
		</div>
	);
};

export default Cadastro;
