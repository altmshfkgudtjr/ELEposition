import React from 'react'
import styled from 'styled-components'

const SubmitBtn = ({ message, onClick }) => {
	return <Btn onClick={onClick}>{message}</Btn>;
}

const Btn = styled.button`
	width: calc(50% - 10px);
	height: 40px;
	line-height: 36px;
	border: none;
	border-radius: 10px;
	background-color: rgba(255,255,255,.1);
	color: white;
	transition: .3s cubic-bezier(0.4,0.0,0.2,1);

	&:hover {
		background-color: rgba(255,255,255,.25);
	}
`;

export default SubmitBtn