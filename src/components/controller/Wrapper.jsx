import React from 'react'
import styled from 'styled-components'

const Wrapper = ({ display, children }) => {
	return <Container show={display}>{children}</Container>;
}

const Container = styled.div`
	position: fixed;
	top: 0;
	left: ${props => props.show
		? '0px'
		: '-360px'
	};
	width: 360px;
	height: 100vh;
	background: rgba(0,0,0,0.8);
	backdrop-filter: saturate(180%) blur(12px);
	box-shadow: 0 4px 8px rgba(0,0,0,.6);
	z-index: 10;
	transition: .6s cubic-bezier(0.4,0.0,0.2,1);
	overflow-x: hidden;
	overflow-y: overlay;

	&::-webkit-scrollbar {
		width: 4px;
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background: #ddd;
		border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: #ccc;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
`;

export default Wrapper