import React from 'react'
import styled, { keyframes } from 'styled-components'

const backgroundChanged = keyframes`
	0% { background-color: rgba(255, 45, 85, .4) }
	12% { background-color: rgba(88, 86, 214, .4) }
	24% { background-color: rgba(255, 149, 0, .4) }
	36% { background-color: rgba(255, 204, 0, .4) }
	48% { background-color: rgba(255, 59, 48, .4) }
	60% { background-color: rgba(90, 200, 250, .4) }
	72% { background-color: rgba(0, 122, 255, .4) }
	84% { background-color: rgba(76, 217, 100, .4) }
	96% { background-color: rgba(255, 45, 85, .4) }
`;

const ToggleBtn = ({value, onClick}) => {
	return <Btn value={value} onClick={onClick} />;
}

const Btn = styled.button`
	position: absolute;
	right: 20px;
	top: 20px;
	width: 40px;
	height: 40px;
	border-radius: 40px;
	background-color: rgba(255, 45, 85, .4);
	transition: .6s cubic-bezier(0.4,0.0,0.2,1);
	animation: ${backgroundChanged} 6s infinite;

	&:hover {
		animation-play-state: paused;
		box-shadow: 0 0 20px 8px rgba(255, 45, 85, .4);

		&::after {
			box-shadow: 0 0 8px 6px rgba(255, 45, 85, .4) inset;
		}
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 30px;
		height: 30px;
		background-color: #fff;
		border-radius: 30px;
		transition: .6s cubic-bezier(0.4,0.0,0.2,1);
	}
`;

export default ToggleBtn