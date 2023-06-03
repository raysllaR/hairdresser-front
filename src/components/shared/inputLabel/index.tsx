import { InputBase, InputLabel } from "@mui/material";
import React from "react";
import "./style.css";

type TInput = {
	label: string;
	placeholder: string;
	type?: string;
	requered?: boolean;
};

const Input: React.FC<TInput> = ({ label, placeholder, type = "text" }) => {
	return (
		<>
			<InputLabel
				className="input-label"
				htmlFor="my-input">
				{label}
			</InputLabel>
			<InputBase
				id="my-input"
				className="input-padrao"
				placeholder={placeholder}
				type={type}
			/>
		</>
	);
};

export default Input;
