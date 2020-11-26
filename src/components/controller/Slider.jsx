import React from 'react'
import styled from 'styled-components'

const Slider = ({ minValue, maxValue, value, onChange, barId }) => {
	return (
		<div>
			<Content type="range" 
							 min={minValue}
							 max={maxValue}
							 value={value}
							 onChange={onChange} />
			<Bar id={barId} />
		</div>
	);
}

const Content = styled.input`
	appearance: none;
	width: 100%;
	height: 24px;
	background: rgba(255,255,255,.15);
	border-radius: 24px;
	outline: none;
	transition: .2s;

	&::-webkit-slider-thumb {
		appearance: none;
		width: 24px;
		height: 24px;
		background: white;
		box-sizing: border-box;
		border: 1px solid #ccc;
		box-shadow: 0px 0px 4px rgba(0,0,0,.4);
		border-radius: 24px;
		cursor: pointer;
		z-index: 1;
	}
`;

const Bar = styled.div`
	position: absolute;
	max-width: 256px;
	height: 24px;
	background-color: #fff;
	border-radius: 24px 0 0 24px;
	border-left: 12px solid white;
	margin: -28px 12px 0 0px;
	z-index: -1;
`;

export default Slider