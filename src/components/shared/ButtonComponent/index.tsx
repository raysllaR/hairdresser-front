import React from "react";
import { ButtonBase } from "@mui/material";
import TButtonForm from "../../types/TButtonForm";
import "./style.css";

const ButtonForm: React.FC<TButtonForm> = ({
	text,
	type = "button",
	onClick,
	className,
}) => {
	return (
		<ButtonBase
			id="button-component"
			className={className}
			type={type}
			onClick={onClick}>
			{text}
		</ButtonBase>
	);
};

export default ButtonForm;
