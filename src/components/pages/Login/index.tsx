import React from "react";
import Card from "@mui/material/Card";
import "./index.css";
import { Button, CardContent, TextField } from "@mui/material";

const Login: React.FC = () => {
	return (
		<div id="app">
			<div className="divPai">
				<div className="logo">
					<img
						className="logo-img"
						src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
					/>
					<span>Hero Hairdresses</span>
				</div>
				<Card
					style={{
						background: "rgba(0,0,0,0.5)",
						width: "100%",
					}}>
					<CardContent
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 30,
							padding: 20,
							width: "100%",
						}}>
						<span>Olá! Seja Bem-vindo</span>
						<form
							action=""
							style={{ display: "flex", flexDirection: "column", gap: 30 }}>
							<TextField
								id="outlined-basic"
								label="Outlined"
								variant="outlined"
							/>
							<TextField
								id="outlined-basic"
								label="Outlined"
								variant="outlined"
							/>
							<Button
								type="submit"
								variant="contained">
								Entrar
							</Button>
						</form>
						{/* <div className="dados-adicionais"> */}
						<span>
							Esqueceu sua senha? <a href="">Recuperar</a>
						</span>
						<span>
							Ainda não tem conta? <a href="">Cadastre-se</a>
						</span>
						{/* </div> */}
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Login;
