import React from 'react';
import ThemeProvider from '@lernatest/gel-themes';
import styled from 'styled-components';
import getName from './utils/getName';

// test object-rest-spread is supported (a babel stage3 feature, not es6/ES2015 standard)
const { a, ...rest } = { a: 1, b: 2, c: 3 };
// test styled-component
const Wrapper = styled.div`
  height: 200px;
`;
// test internal package dependency
const theme = ThemeProvider.getTheme();
const Button = styled.button`
  color: ${theme.primaryColor};
`
// test internal module 
const name = getName();


const FancyButton = () => <button >fancy button ${name}</button>

export default FancyButton;

// some change 1122;
// try lerna --exact 