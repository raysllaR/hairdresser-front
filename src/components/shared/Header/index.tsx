import React, { useState } from "react";
import iconAcount from "../../../assets/images/icons/account_circle.svg";
import { ClickAwayListener, Paper, MenuList, MenuItem } from "@mui/material";
import IconImg from "../IconImg";
// import imgLogo from "../../../assets/images/logos/logo-white.svg";
import imgLogoSemText from "../../../assets/images/logos/logo-white-withiout-text.svg";
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
				<div className="logo-container">
					<img
						src={imgLogoSemText}
						alt=""
					/>
					<span>Hero Hairdresses</span>
				</div>
				<div>
					<button onClick={toogleShoeDropMenu}>
						<IconImg urlImg={iconAcount} />
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
