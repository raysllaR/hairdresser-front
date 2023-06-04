import { List, ListItem } from "@mui/material";
import iconEdit from "../../../assets/images/icons/edit-red.svg";
import iconDelete from "../../../assets/images/icons/delete.svg";
import "./style.css";

type THorarioList = {
	listHorarios?: Array<{
		horario: Date;
		cliente: string;
	}>;
};

const HorariosList: React.FC<THorarioList> = ({ listHorarios = [] }) => {
	return (
		<List id="horarios-list">
			{listHorarios.map(({ horario, cliente }, index) => (
				<ListItem
					className="list-item"
					key={index}>
					<div className="horario">{horario.getHours()}h</div>
					<div className="data">
						{cliente}
						<div className="buttons-icons">
							<button>
								<img
									src={iconEdit}
									alt="icoon"
								/>
							</button>
							<button>
								<img
									src={iconDelete}
									alt="icoon"
								/>
							</button>
						</div>
					</div>
				</ListItem>
			))}
		</List>
	);
};

export default HorariosList;
