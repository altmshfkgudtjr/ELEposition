import React, { useState } from 'react'
import Wrapper from 'components/controller/Wrapper'
import ToggleBtn from 'components/ToggleBtn'
import Title from 'components/controller/Title'
import CreateWidget from 'components/controller/CreateWidget'
import ClearBtn from 'components/controller/ClearBtn'
import GithubBtn from 'components/controller/GithubBtn'
import BoxInfo from 'components/controller/BoxInfo'
import Help from 'components/controller/Help'

const Controller = ({ boxes, setBoxes, info }) => {
	const palette = [
		'rgba(255, 45, 85, .4)',
		'rgba(88, 86, 214, .4)',
		'rgba(255, 149, 0, .4)',
		'rgba(255, 204, 0, .4)',
		'rgba(255, 59, 48, .4)',
		'rgba(90, 200, 250, .4)',
		'rgba(0, 122, 255, .4)',
		'rgba(76, 217, 100, .4)',
		'rgba(21, 106, 104, .4)',
		'rgba(6, 59, 58, .4)',
		'rgba(237, 148, 245, .4)'
	];
	const maxWidth = Math.floor(window.innerWidth / 2);
	const maxHeight = Math.floor(window.innerHeight / 2);
	const minWidth = 1;
	const minHeight = 1;
	const windowSize = {maxWidth, maxHeight, minWidth, minHeight};
	const [display, setDisplay] = useState(true);
	const [width, setWidth] = useState(100);
	const [height, setHeight] = useState(100);

	const onClickToggle = () => {
		setDisplay(!display);
	}

	const creatingBox = (w=null, h=null) => {
		const W = typeof(w) === 'number' ? w : width;
		const H = typeof(h) === 'number' ? h : height;
		const id = Math.floor(Math.random() * 1000000);
		const x = Math.floor(Math.random() * (window.innerWidth - W));
		const y = Math.floor(Math.random() * (window.innerHeight - H));
		const color = palette[Math.floor(Math.random() * palette.length)];
		const boxInfo = { id, x, y, color, valid: true, width: W, height: H };
		if (boxes.length >= 10) {
			popAndPushBox(boxInfo);
		} else {
			setBoxes([...boxes, boxInfo]);
		}
	}

	const popAndPushBox = (boxInfo) => {
		const output = boxes.map((box, index) => {
			if (index === 0) return {...box, valid: false};
			else return box;
		});
		setBoxes(output);
		setTimeout(() => {
			setBoxes([...output.slice(1), boxInfo]);
		}, 150);
	}

	const clearBoxes = () => {
		const output = boxes.map(box => ({...box, valid: false}));
		setBoxes(output);
		setTimeout(() => {
			setBoxes([]);
		}, 150);
	}

	const onGithub = () => {
		const a = document.createElement('a');
		a.setAttribute('href', `https://github.com/altmshfkgudtjr`);
		a.setAttribute('target', "_blank");
		a.style.opacity = 0;
		document.querySelector('body').append(a);
		a.click();
		a.remove();
	}

	return (<>
		<ToggleBtn value={display} onClick={onClickToggle} />
		<Wrapper display={display}>
			<Title />
			<CreateWidget windowSize={windowSize} 
										width={width} height={height}
										setWidth={setWidth} setHeight={setHeight}
										onCreate={creatingBox} />
			<ClearBtn onClick={clearBoxes} />
			<GithubBtn onClick={onGithub} />
			<BoxInfo info={info} />
			<Help />
		</Wrapper>
	</>);
}

export default Controller