import React from "react";
import { Card, CardContent } from "@mui/material";
import TCardComponent from "../../types/TCardComponent";
import "./style.css";

const CardComponent: React.FC<TCardComponent> = ({ children }) => {
	return (
		<Card className="card">
			<CardContent className="card-content">{children}</CardContent>
		</Card>
	);
};

export default CardComponent;
