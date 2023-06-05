import React from "react";
import { ButtonBase } from "@mui/material";
import TButtonForm from "../../types/TButtonForm";

const ButtonForm: React.FC<TButtonForm> = ({
	text,
	type = "button",
	onClick,
}) => {
	return (
		<ButtonBase
			className="button"
			type={type}
			onClick={onClick}>
			{text}
		</ButtonBase>
	);
};

export default ButtonForm;
