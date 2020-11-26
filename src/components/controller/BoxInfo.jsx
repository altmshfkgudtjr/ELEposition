import React from 'react'
import styled from 'styled-components'

const BoxInfo = ({ info }) => {
	return (
		<Container>
			<Title>Box Info</Title>
			<InfoWrapper>
				<InfoTitle>Size</InfoTitle>
				<div>
					<InfoKey>width</InfoKey>
					<InfoValue>{info ? info.width : '0'} PX</InfoValue>
				</div>
				<div>
					<InfoKey>height</InfoKey>
					<InfoValue>{info ? info.height : '0'} PX</InfoValue>
				</div>
			</InfoWrapper>
			<InfoWrapper>
				<InfoTitle>LeftTop</InfoTitle>
				<div>
					<InfoKey>x</InfoKey>
					<InfoValue>{info ? info.leftTop.x : '0'} PX</InfoValue>
				</div>
				<div>
					<InfoKey>y</InfoKey>
					<InfoValue>{info ? info.leftTop.y : '0'} PX</InfoValue>
				</div>
			</InfoWrapper>
			<InfoWrapper>
				<InfoTitle>LeftBottom</InfoTitle>
				<div>
					<InfoKey>x</InfoKey>
					<InfoValue>{info ? info.leftBottom.x : '0'} PX</InfoValue>
				</div>
				<div>
					<InfoKey>y</InfoKey>
					<InfoValue>{info ? info.leftBottom.y : '0'} PX</InfoValue>
				</div>
			</InfoWrapper>
			<InfoWrapper>
				<InfoTitle>RightTop</InfoTitle>
				<div>
					<InfoKey>x</InfoKey>
					<InfoValue>{info ? info.rightTop.x : '0'} PX</InfoValue>
				</div>
				<div>
					<InfoKey>y</InfoKey>
					<InfoValue>{info ? info.rightTop.y : '0'} PX</InfoValue>
				</div>
			</InfoWrapper>
			<InfoWrapper>
				<InfoTitle>RightBottom</InfoTitle>
				<div>
					<InfoKey>x</InfoKey>
					<InfoValue>{info ? info.rightBottom.x : '0'} PX</InfoValue>
				</div>
				<div>
					<InfoKey>y</InfoKey>
					<InfoValue>{info ? info.rightBottom.y : '0'} PX</InfoValue>
				</div>
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

	& > div {
		display: flex;
		justify-content: space-between;
	}
`;

const InfoTitle = styled.h2`
	color: #f2f2f2;
	font-size: 14px;
	margin: 0;
`;

const InfoKey = styled.div`
	color: #aaa;
`;

const InfoValue = styled.div`
	color: #f2f2f2;
`;

export default BoxInfo