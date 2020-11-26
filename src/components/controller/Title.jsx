import React from 'react'
import styled from 'styled-components'

const Title = () => {
	return (
		<Container>
			<Content>ELEposition</Content>
			<SubContent>Demo Page</SubContent>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 320px;
	height: 160px;
	margin: 20px auto 20px auto;
	border-radius: 20px;
	box-shadow: 0 4px 8px rgba(0,0,0,.2);
	background: radial-gradient(circle at 95% 0,
															rgba(255,0,0,.5),
															rgba(255,0,0,0) 90.71%),
							radial-gradient(circle at 0% 0%,
															rgba(255, 184, 51,.6),
															rgba(255, 184, 51,0) 90.71%),
							radial-gradient(circle at 100% 100%,
															rgba(9, 17, 128,.8),
															rgba(9, 17, 128,.1) 60.71%),
							radial-gradient(circle at 35% 110%,
															rgba(132, 15, 171,.8),
															rgba(132, 15, 171,0) 80.71%) beige;
`;

const Content = styled.h1`
	font-size: 2rem;
	line-height: 1.4;
	font-weight: bold;
	text-align: center;
	color: white;
	margin: 0;
`;

const SubContent = styled.div`
	font-size: 14px;
	line-height: 2;
	text-align: center;
	color: white;
`;

export default Title