import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const BoxWrapper = ({ width, height, x, y, color, valid, onClick, onContextMenu, children }) => {
	return (
		<Container width={width} height={height}
							 x={x} y={y}
							 color={color}
							 valid={valid}
							 onClick={onClick}
							 onContextMenu={onContextMenu}>
			{children}
			<Seleted />
		</Container>
	);
}

const Container = styled.div`
	position: absolute;
	left: ${props => props.x+'px'};
	top: ${props => props.y+'px'};
	width: ${props => props.width+'px'};
	height: ${props => props.height+'px'};
	border-radius: 20%:;
	background: ${props => props.color};
	backdrop-filter: saturate(180%) blur(12px);
	box-shadow: 0 4px 8px rgba(0,0,0,.4);
	transition: .4s cubic-bezier(0.4,0.0,0.2,1);
	cursor: pointer;
	${props => props.valid
		? css`animation: ${fadeInTop} .2s`
		: css`animation: ${fadeOutTop} .2s`
	};

	&:hover {
		& > div {
			display: block;
		}
	}
`;

const Seleted = styled.div`
	position: absolute;
	display: none;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, .2);
	z-index: 1;
`;

const fadeInTop = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeOutTop = keyframes`
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(-20px);
	}
`;

export default BoxWrapper