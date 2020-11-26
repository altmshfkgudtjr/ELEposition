import React from 'react'
import styled from 'styled-components'

const PageWrapper = ({ children }) => {
	return <Container>{children}</Container>;
}

const Container = styled.div`
	position: relative;
	min-height: 100vh;
	overflow-y: auto;
	background-color: #ebebeb;
	background: url('./build/images/paint.jpg');
	background-size: contain;
	background-repeat: no-repeat;
`;

export default PageWrapper