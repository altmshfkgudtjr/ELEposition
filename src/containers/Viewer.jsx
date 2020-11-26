import React, { useState } from 'react'
import Controller from 'containers/Controller'
import Box from 'containers/Box'
import Copyright from 'components/Copyright'

const Viewer = () => {
	const [boxes, setBoxes] = useState([]);
	const [info, setInfo] = useState(null);

	const onDropBox = (id) => {
		setBoxes(boxes.filter(box => box.id !== id));
	}

	const Boxes = boxes.map(
		box => <Box key={box.id} info={box} 
								onDropBox={onDropBox} setInfo={setInfo} />
	);

	return (<>
		<Controller boxes={boxes} setBoxes={setBoxes} info={info} />
		{Boxes}
		<Copyright />
	</>);
}

export default Viewer