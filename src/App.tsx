import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Home from "./components/pages/Home";
import "./style.css";
import EditarPerfil from "./components/pages/EditarPerfil";
import Agendamento from "./components/pages/Agendamento";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					Component={Login}
				/>
				<Route
					path="/cadastro"
					Component={Cadastro}
				/>
				<Route
					path="/"
					Component={Home}
				/>
				<Route
					path="/editarperfil"
					Component={EditarPerfil}
				/>
				<Route
					path="/agendamento"
					Component={Agendamento}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
