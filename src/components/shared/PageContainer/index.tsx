import React, { ReactNode } from "react";
import styled from "styled-components";

const Page = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	scroll-behavior: smooth;
	background-size: cover;
	user-select: none;
	background-color: var(--gray-50);
`;

const Container = styled.div`
	width: 100%;
	max-width: 1000px;

	@media (max-width: 1200px) {
		margin: 0 5%;
		align-items: center !important;
	}
`;

type TPageComponent = {
	children: ReactNode;
	classNamePage?: string;
	classNameContainer?: string;
};

const PageContainer: React.FC<TPageComponent> = ({
	children,
	classNamePage,
	classNameContainer,
}) => {
	return (
		<Page className={classNamePage}>
			<Container className={classNameContainer}>{children}</Container>
		</Page>
	);
};

export default PageContainer;
