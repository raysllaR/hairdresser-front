type TButtonsType = "button" | "reset" | "submit";

type TButtonForm = {
	text: string;
	onClick?: () => void;
	type?: TButtonsType;
	className?: string;
};

export default TButtonForm;
