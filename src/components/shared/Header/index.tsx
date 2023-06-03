import React, { useState } from "react";
import Logo from "../../shared/Logo";
import iconAcount from "../../../assets/images/icons/account_circle.svg";
import { ClickAwayListener, Paper, MenuList, MenuItem } from "@mui/material";
import "./style.css";

const Header: React.FC = () => {
	const [showDropMenu, setShowDropMenu]: [
		boolean,
		React.Dispatch<React.SetStateAction<boolean>>
	] = useState(false);

	const toogleShoeDropMenu = () => {
		setShowDropMenu(!showDropMenu);
	};

	return (
		<div className="container-header">
			<div className="header">
				<Logo
					direction="row"
					theme="white"
				/>
				<div>
					<button onClick={toogleShoeDropMenu}>
						<img
							src={iconAcount}
							alt="icon"
						/>
						Perfil
					</button>
					{showDropMenu ? (
						<Paper className="drop-down">
							<ClickAwayListener onClickAway={toogleShoeDropMenu}>
								<MenuList
									className="dados-menu"
									autoFocusItem>
									<MenuItem>Agendamentos</MenuItem>
									<MenuItem>Editar perfil</MenuItem>
									<MenuItem>Sair</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
