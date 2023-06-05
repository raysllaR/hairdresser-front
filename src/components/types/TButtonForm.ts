type TButtonsType = "button" | "reset" | "submit";

type TButtonForm = {
	text: string;
	onClick?: () => void;
	type?: TButtonsType;
};

export default TButtonForm;
