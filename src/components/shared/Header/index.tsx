import React from "react";
import Logo from "../../shared/Logo";
import iconAcount from "../../../assets/images/icons/account_circle.svg";
import {
	ButtonGroup,
	Button,
	ClickAwayListener,
	Paper,
	MenuList,
	MenuItem,
} from "@mui/material";

const Header: React.FC = () => {
	return (
		<div className="container-header">
			<div className="header">
				<Logo
					direction="row"
					theme="white"
				/>
				<div>
					<button>
						<img
							src={iconAcount}
							alt="icon"
						/>
						Perfil
					</button>
					<Paper className="drop-down">
						<ClickAwayListener onClickAway={() => console.log("OI")}>
							<MenuList
								className="dados-menu"
								autoFocusItem>
								<MenuItem>Agendamentos</MenuItem>
								<MenuItem>Editar perfil</MenuItem>
								<MenuItem>Sair</MenuItem>
							</MenuList>
						</ClickAwayListener>
					</Paper>
				</div>
			</div>
		</div>
	);
};

export default Header;
