import { InputBase } from "@mui/material";
import React from "react";
import IconImg from "../IconImg";
import TInputIcon from "../../types/TInputIcon";
import "./style.css";

const InputIcon: React.FC<TInputIcon> = ({
	type = "text",
	required = true,
	placeholder,
	startAdornmentImgPath,
	buttonIcon,
}) => {
	return (
		<InputBase
			className="input"
			placeholder={placeholder}
			type={type}
			required={required}
			startAdornment={<IconImg urlImg={startAdornmentImgPath} />}
			endAdornment={buttonIcon}
		/>
	);
};

export default InputIcon;
