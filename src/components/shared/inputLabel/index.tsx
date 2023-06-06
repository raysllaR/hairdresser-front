import { InputBase, InputLabel } from "@mui/material";
import React from "react";
import "./style.css";

type TType = "email" | "password" | "text" | "number" | "date" | "time";

type TInput = {
	label: string;
	type?: TType;
	requered?: boolean;
	placeholder?: string;
	width?: number;
};

const Input: React.FC<TInput> = ({
	label,
	type = "text",
	requered = true,
	placeholder = "",
	width,
}) => {
	return (
		<div id="container-input">
			<InputLabel
				className="input-label"
				htmlFor="my-input">
				{label}
			</InputLabel>
			<InputBase
				style={{ width: width ? `${width}px` : "100%" }}
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
