import React from 'react'
import styled from 'styled-components'

const Copyright = () => {
	return (
		<Container>
			© NB, 2020 All Rights Reserved. ver.1.0.0
		</Container>
	);
}

const Container = styled.div`
	position: absolute;
	right: 20px;
	bottom: 20px;
	background: rgba(0,0,0,0.8);
	backdrop-filter: saturate(180%) blur(12px);
	box-shadow: 0 4px 8px rgba(0,0,0,.6);
	z-index: 10;
	transition: .6s cubic-bezier(0.4,0.0,0.2,1);
	box-sizing: border-box;
	padding: 20px;
	border-radius: 10px;
	color: #fff;
`;

export default Copyright