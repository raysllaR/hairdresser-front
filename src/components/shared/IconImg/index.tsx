import React from "react";
import "./style.css";

type TIconImg = {
	urlImg: string;
};

const IconImg: React.FC<TIconImg> = ({ urlImg }) => {
	return (
		<img
			id="icon"
			src={urlImg}
			alt="Icon"
		/>
	);
};

export default IconImg;
