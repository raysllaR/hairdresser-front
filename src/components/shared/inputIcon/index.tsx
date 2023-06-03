import { InputBase } from "@mui/material";
import React, { ReactNode } from "react";

type TInputIcon = {
	placeholder: string;
	startAdornmentImgPath: string;
	type?: string;
	required?: boolean;
	buttonIcon?: ReactNode;
};

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
			startAdornment={
				<img
					className="icon"
					src={startAdornmentImgPath}
					alt="Icon"
				/>
			}
			endAdornment={buttonIcon}
		/>
	);
};

export default InputIcon;
