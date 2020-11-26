import React, { useEffect } from 'react'
import styled from 'styled-components'
import Slider from 'components/controller/Slider'
import SubmitBtn from 'components/controller/SubmitBtn'

const CreateWidget = ({ windowSize, width, height, setWidth, setHeight, onCreate }) => {	
	const onRandomSize = () => {
		const w = Math.floor(Math.random() * windowSize.maxWidth);
		const h = Math.floor(Math.random() * windowSize.maxHeight);
		setWidth(w);
		setHeight(h);
		onCreate(w, h);
	}

	const onChangeWidth = (e) => {
		if (!e || !e.target) return;

		let value = e.target.value;
		if (value >= windowSize.maxWidth) value = windowSize.maxWidth;
		else if (value <= windowSize.minWidth) value = windowSize.minWidth;

		setWidth(value);
	}

	const onChangeHeight = (e) => {
		if (!e || !e.target) return;

		let value = e.target.value;
		if (value >= windowSize.maxHeight) value = windowSize.maxHeight;
		else if (value <= windowSize.minHeight) value = windowSize.minHeight;

		setHeight(value);
	}

	useEffect(() => {
		document.querySelector("#widthBar").style.width = width / windowSize.maxWidth * 256 + 'px';
	}, [width, windowSize.maxWidth]);

	useEffect(() => {
		document.querySelector("#heightBar").style.width = height / windowSize.maxHeight * 256 + 'px';
	}, [height, windowSize.maxHeight]);

	return (
		<Container>
			<Title>New Box</Title>
			{/* ==================== Width Option ==================== */}
			<SliderWrapper>
				<SliderTitleWrapper>
					<SliderTitle>Width</SliderTitle>
					<div>
						<SliderInput type="number"
												 min={windowSize.minWidth}
												 max={windowSize.maxWidth}
												 value={width}
												 placeholder={width}
												 onChange={onChangeWidth} />
						<span>PX</span>
					</div>
				</SliderTitleWrapper>
				<Slider minValue={windowSize.minWidth}
								maxValue={windowSize.maxWidth}
								value={width}
								onChange={onChangeWidth}
								barId="widthBar" />
			</SliderWrapper>
			{/* ==================== Height Option ==================== */}
			<SliderWrapper>
				<SliderTitleWrapper>
					<SliderTitle>Height</SliderTitle>
					<div>
						<SliderInput type="number"
												 min={windowSize.minHeight}
												 max={windowSize.maxHeight}
												 value={height}
												 placeholder={height}
												 onChange={onChangeHeight} />
						<span>PX</span>
					</div>
				</SliderTitleWrapper>
				<Slider minValue={windowSize.minHeight}
								maxValue={windowSize.maxHeight}
								value={height}
								onChange={onChangeHeight}
								barId="heightBar" />
			</SliderWrapper>
			{/* ==================== Submit Area ==================== */}
			<BtnWrapper>
				<SubmitBtn message="Create" onClick={onCreate} />
				<SubmitBtn message="Random" onClick={onRandomSize} />
			</BtnWrapper>
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

const SliderWrapper = styled.div`
	margin: 20px 0;
`;

const SliderTitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;

	& span {
		color: white;
	}
`;

const SliderTitle = styled.div`
	color: #f2f2f2;
`;

const SliderInput = styled.input`
	appearance: textfield;
	background-color: rgba(0,0,0,0);
	outline: none;
	width: 100px;
	text-align: right;
	color: white;
	margin-right: 10px;

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		appearance: none;
		margin: 0;
	}
`;

const BtnWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px 0;
`;

export default CreateWidget