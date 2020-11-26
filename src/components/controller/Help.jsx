import React from 'react'
import styled from 'styled-components'

const Help = () => {
	return (
		<Container>
			<Title>How to use?</Title>
			<InfoWrapper>
				<InfoKey>Left Click</InfoKey>
				<InfoValue>Calculate target's position</InfoValue>
			</InfoWrapper>
			<InfoWrapper>
				<InfoKey>Right Click</InfoKey>
				<InfoValue>Delete element</InfoValue>
			</InfoWrapper>
		</Container>
	);
}

const Container = styled.div`
	width: 320px;
	box-sizing: border-box;
	padding: 20px;
	margin: 20px auto 20px auto;
	border-radius: 20px;
	background: rgba(255,255,255,0.1);
`;

const Title = styled.div`
	font-size: 18px;
	color: #f2f2f2;
	font-weight: bold;
`;

const InfoWrapper = styled.div`
	margin: 20px 0;
	display: flex;
	justify-content: space-between;
`;

const InfoKey = styled.div`
	color: #f2f2f2;
	font-size: 14px;
`;

const InfoValue = styled.div`
	color: #aaa;
	font-size: 14px;
`;

export default Help