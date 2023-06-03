import { InputBase, InputLabel } from "@mui/material";
import React from "react";
import "./style.css";

type TInput = {
	label: string;
	type?: string;
	requered?: boolean;
};

const Input: React.FC<TInput> = ({ label, type = "text" }) => {
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
			/>
		</div>
	);
};

export default Input;
