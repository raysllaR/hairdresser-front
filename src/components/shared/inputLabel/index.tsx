import { InputBase, InputLabel } from "@mui/material";
import React from "react";
import "./style.css";

type TType = "email" | "password" | "text" | "number";

type TInput = {
	label: string;
	type?: TType;
	requered?: boolean;
	placeholder?: string;
};

const Input: React.FC<TInput> = ({
	label,
	type = "text",
	requered = true,
	placeholder = "",
}) => {
	return (
		<div id="container-input">
			<InputLabel
				className="input-label"
				htmlFor="my-input">
				{label}
			</InputLabel>
			<InputBase
				id="my-input"
				placeholder={placeholder}
				className="input-padrao"
				type={type}
				required={requered}
			/>
		</div>
	);
};

export default Input;
