import { InputBase } from "@mui/material";
import React from "react";

type TInputIcon = {
	placeholder: string;
	startAdornmentImgPath: string;
	type?: string;
};

const InputIcon: React.FC<TInputIcon> = ({
	type = "text",
	placeholder,
	startAdornmentImgPath,
}) => {
	return (
		<InputBase
			className="input"
			placeholder={placeholder}
			type={type}
			startAdornment={
				<img
					className="icon"
					src={startAdornmentImgPath}
					alt="Icon"
				/>
			}
		/>
	);
};

export default InputIcon;
