import React, { useState } from "react";
import iconVisibility from "../../../assets/images/icons/visibility.svg";
import iconkey from "../../../assets/images/icons/key.svg";
import iconNoVisibility from "../../../assets/images/icons/no-visibility.svg";
import InputIcon from "../inputIcon";
import "./style.css";

const InputIconPassword: React.FC = () => {
	const [showPassword, setShowPassword]: [
		boolean,
		React.Dispatch<React.SetStateAction<boolean>>
	] = useState(false);

	const togglePasswordVisibility = (): void => {
		setShowPassword(!showPassword);
	};

	return (
		<InputIcon
			placeholder="Senha"
			type={showPassword ? "text" : "password"}
			startAdornmentImgPath={iconkey}
			buttonIcon={
				<img
					onClick={togglePasswordVisibility}
					alt="Icon"
					className="icon button-icon"
					src={showPassword ? iconVisibility : iconNoVisibility}
				/>
			}
		/>
	);
};

export default InputIconPassword;
