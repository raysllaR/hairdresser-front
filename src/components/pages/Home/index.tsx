import React from "react";
import "./style.css";
import Header from "../../shared/Header";
import HorariosList from "../../shared/HorariosList";

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
	];

	return (
		<div id="home">
			<div className="body">
				<Header />
				<HorariosList listHorarios={mockListHorario} />
			</div>
		</div>
	);
};

export default Home;
