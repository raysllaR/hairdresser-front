import Header from "../../shared/Header";
import React from "react";
import "./style.css";
import InputLabel from "../../shared/inputLabel";
import ButtonComponent from "../../shared/ButtonComponent";
import DatePickerComponent from "../../shared/DatePickerComponent";

const Agendamento: React.FC = () => {
	return (
		<div
			id="agendamento"
			className="page">
			<Header />
			<h2 className="title">Agendamento de Horário</h2>
			<div className="body">
				<form
					action=""
					style={{ display: "flex", flexDirection: "column", gap: 8 }}>
					<InputLabel label="Nome do Cliente" />
					<InputLabel
						label="Celular"
						placeholder="(xx) xxxxx-xxxx"
						type="text"
					/>
					<InputLabel
						label="Date"
						placeholder="MM/DD/AAAA"
						type="date"
					/>
					<DatePickerComponent />

					<div className="container-buttons">
						<ButtonComponent
							type="reset"
							text="Cancelar"
							className="reverse"
						/>
						<ButtonComponent
							type="submit"
							text="Salvar"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Agendamento;
