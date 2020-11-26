import React, { useState, useEffect } from 'react'
import BoxWrapper from 'components/box/BoxWrapper'
import getElementPosition from 'lib/getElementPosition'

const Box = ({ info, onDropBox, setInfo }) => {
	const [valid, setValid] = useState(info.valid);

	const onContextMenu = (e) => {
		if (!e) return;
		e.preventDefault();
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
		setValid(false);
		setTimeout(() => onDropBox(info.id), 150);
	}

	const onClick = (e) => {
		if (!e.target) return;
		const pos = getElementPosition(e.target);
		setInfo(pos);
	}

	useEffect(() => {
		setValid(info.valid);
	}, [info.valid]);

	return (
		<BoxWrapper width={info.width} height={info.height}
								x={info.x} y={info.y} color={info.color} 
								valid={valid}
								onClick={onClick}
								onContextMenu={onContextMenu}>
		</BoxWrapper>
	);
}

export default Box