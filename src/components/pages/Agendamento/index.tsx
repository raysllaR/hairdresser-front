import Header from "../../shared/Header";
import React from "react";
import "./style.css";
import InputLabel from "../../shared/inputLabel";
import { ButtonBase } from "@mui/material";

const Agendamento: React.FC = () => {
	return (
		<div
			id="agendamento"
			className="page">
			<div className="body">
				<Header />
				<h2 className="title">Agendamento de Horário</h2>
				<form action="">
					<InputLabel label="Nome do Cliente" />
					<InputLabel
						label="Email"
						type="number"
					/>

					<div className="container-buttons">
						<ButtonBase
							className="button"
							type="submit">
							Cancelar
						</ButtonBase>
						<ButtonBase
							className="button"
							type="submit">
							Editar
						</ButtonBase>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Agendamento;
