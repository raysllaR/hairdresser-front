import { ReactNode } from "react";

type TInputIcon = {
	placeholder: string;
	startAdornmentImgPath: string;
	type?: string;
	required?: boolean;
	buttonIcon?: ReactNode;
};

export default TInputIcon;
