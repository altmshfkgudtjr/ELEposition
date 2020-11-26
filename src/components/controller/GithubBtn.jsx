import React from 'react'
import styled from 'styled-components'

const GithubBtn = ({ onClick }) => {
	return (
		<Btn onClick={onClick}>
			<Icon />
			<Message>{`GitHub`}</Message>
		</Btn>
	);
}

const Btn = styled.button`
	display: inline-flex;
	vertical-align: top;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 150px;
	height: 150px;
	box-sizing: border-box;
	padding: 20px;
	margin-left: 20px;
	border-radius: 20px;
	background: rgba(255,255,255,.1);
	cursor: pointer;
	transition: .3s cubic-bezier(0.4,0.0,0.2,1);

	&:hover {
		background: rgba(255,255,255,.3);
	}
`;

const Icon = styled.div`
	width: 48px;
	height: 48px;
	margin-bottom: 10px;
	background-image: url('/icons/github.png');
	background-repeat: no-repeat;
	background-size: cover;
	filter: invert(98%) sepia(0%) saturate(5691%) hue-rotate(194deg) brightness(118%) contrast(90%);
`;

const Message = styled.div`
	text-align: center;
	color: white;
	white-space: pre-wrap;
`;

export default GithubBtn