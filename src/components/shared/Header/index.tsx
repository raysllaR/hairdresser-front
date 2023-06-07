import React, { useState } from "react";
import {
	ClickAwayListener,
	Paper,
	MenuList,
	MenuItem,
	ButtonBase,
} from "@mui/material";
import { Link } from "react-router-dom";
import IconImg from "../IconImg";
import iconAcount from "../../../assets/images/icons/account_circle.svg";
import imgLogoSemText from "../../../assets/images/logos/logo-white-withiout-text.svg";
import "./style.css";

const Header: React.FC = () => {
	const [showDropMenu, setShowDropMenu] = useState<boolean>(false);

	const toogleShoeDropMenu = (): void => {
		setShowDropMenu(!showDropMenu);
	};

	const cleanLocalStorage = (): void => {
		localStorage.removeItem("login");
	};

	return (
		<div id="header">
			<div className="container">
				<Link to="/">
					<div className="logo-container">
						<img
							src={imgLogoSemText}
							alt="Logo"
						/>
						<span>Hero Hairdresses</span>
					</div>
				</Link>
				<div>
					<ButtonBase onClick={toogleShoeDropMenu}>
						<IconImg urlImg={iconAcount} />
						Perfil
					</ButtonBase>
					{showDropMenu ? (
						<Paper className="drop-down">
							<ClickAwayListener onClickAway={toogleShoeDropMenu}>
								<MenuList
									className="dados-menu"
									autoFocusItem>
									<Link to="/agendamento">
										<MenuItem>Agendamentos</MenuItem>
									</Link>
									<Link to="/editarperfil">
										<MenuItem>Editar perfil</MenuItem>
									</Link>
									<Link
										to="/login"
										onClick={cleanLocalStorage}>
										<MenuItem>Sair</MenuItem>
									</Link>
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
