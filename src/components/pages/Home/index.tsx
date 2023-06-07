import React, { useState } from "react";
import Header from "../../shared/Header";
import HorariosList from "../../shared/HorariosList";
import Calendar from "../../shared/Calendar";
import PageContainer from "../../shared/PageContainer";
import "./style.css";

const Home: React.FC = () => {
	const mockListHorario: Array<{
		horario: Date;
		cliente: string;
	}> = [
		{
			horario: new Date("2023-06-03T10:00:00"),
			cliente: "Cliente 1",
		},
		{
			horario: new Date("2023-06-03T11:00:00"),
			cliente: "Cliente 2",
		},
		{
			horario: new Date("2023-06-03T14:00:00"),
			cliente: "Cliente 3",
		},
		{
			horario: new Date("2023-06-03T15:30:00"),
			cliente: "Cliente 4",
		},
		{
			horario: new Date("2023-06-03T17:00:00"),
			cliente: "Cliente 5",
		},
		{
			horario: new Date("2023-06-03T17:00:00"),
			cliente: "Cliente 6",
		},
		{
			horario: new Date("2023-06-03T17:00:00"),
			cliente: "Cliente 7",
		},
	];

	const [date, setDate] = useState<Date>(new Date());

	return (
		<PageContainer idPage="home">
			<Header />
			<div className="container-home">
				<div className="container-title">
					<h2 className="title">
						Bem-Vinda, <strong>Rayslla!</strong>
					</h2>
					<span>
						Está é sua lista de horários de hoje, dia{" "}
						{date.toLocaleDateString("pt-BR")} :)
					</span>
				</div>
				<div className="items">
					<h1>Próximos Horarios</h1>
					<div className="container-body">
						<HorariosList listHorarios={mockListHorario} />
						<Calendar />
					</div>
				</div>
			</div>
		</PageContainer>
	);
};

export default Home;
