import React, { useState, ChangeEvent, useRef } from "react";
import { Button, Avatar } from "@material-ui/core";
import defaultAvatatImg from "../../../assets/images/utils/avatar.png";
import editIcon from "../../../assets/images/icons/edit.svg";
import "./style.css";
import { Box } from "@mui/material";

const ImageUpload: React.FC = () => {
	const [selectedImg, setSelectedImg] = useState<File | null>(null);
	const [previewImg, setPreviewImg] = useState<string>(defaultAvatatImg);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleButtonClick = (): void => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleImageChange = ({
		target,
	}: ChangeEvent<HTMLInputElement>): void => {
		const files: FileList | null = target.files;
		if (files && files.length) {
			const file: File | null = files.item(0);
			if (file) {
				setSelectedImg(file);
				setPreviewImg(URL.createObjectURL(file));
			}
		}
	};

	return (
		<div
			id="image-upload"
			style={{ position: "relative" }}>
			<Box className="box-avatar">
				<Avatar
					alt="Selected Image"
					className="avatar"
					src={previewImg}
				/>
			</Box>
			<input
				accept="image/*"
				type="file"
				style={{ display: "none" }}
				ref={fileInputRef}
				onChange={handleImageChange}
			/>
			<label
				style={{ position: "absolute", bottom: 0, right: 0 }}
				htmlFor="image-upload">
				<button
					onClick={handleButtonClick}
					className="button-edit">
					<img
						src={editIcon}
						alt="Icon"
					/>
				</button>
			</label>
		</div>
	);
};

export default ImageUpload;
