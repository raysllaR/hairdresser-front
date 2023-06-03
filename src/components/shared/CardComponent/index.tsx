import React, { ReactNode } from "react";
import { Card, CardContent } from "@mui/material";
import "./style.css";

type TCardComponent = {
	children: ReactNode;
};

const CardComponent: React.FC<TCardComponent> = ({ children }) => {
	return (
		<Card className="card">
			<CardContent className="card-content">{children}</CardContent>
		</Card>
	);
};

export default CardComponent;
