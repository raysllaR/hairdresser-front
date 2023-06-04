import { InputBase, InputLabel } from "@mui/material";
import React from "react";
import "./style.css";

type TType = "email" | "password" | "text";

type TInput = {
	label: string;
	type?: TType;
	requered?: boolean;
};

const Input: React.FC<TInput> = ({ label, type = "text", requered = true }) => {
	return (
		<div id="container-input">
			<InputLabel
				className="input-label"
				htmlFor="my-input">
				{label}
			</InputLabel>
			<InputBase
				id="my-input"
				className="input-padrao"
				type={type}
				required={requered}
			/>
		</div>
	);
};

export default Input;
