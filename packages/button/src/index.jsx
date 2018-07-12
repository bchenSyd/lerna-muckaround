/* eslint-disable no-unused-vars, react/prop-types */
import React from "react";
import { ThemeProvider } from "lerna-test-gel-themes";
import styled from "styled-components";
import getName from "./utils/getName";
import ExtendedExample from "./component";

// test object-rest-spread is supported (a babel stage3 feature, not es6/ES2015 standard)
const { a, ...rest } = { a: 1, b: 2, c: 3 };

// test internal package dependency
const theme = ThemeProvider.getTheme();
const Button = ({ text, ...props }) => (
  <div {...props}>
    <div>this is a button</div>
    <div>{text}</div>
  </div>
);

// test internal module
const name = getName();

// How to understand:
// Consider carefully whether to wrap your own components in a styled component, when it isn't necessary.
// You will disable the automatic whitelisting of props, and reverse the recommended order of styled components
// and structural components.
const FancyButton = styled(Button)`
  color: ${theme.primaryColor};
  height: ${props =>
    props.height}; /* here if we do <FancyButton height='200px' />, the height prop will be passed down to Button, 
    // this is the same as how FontAwesome behaves (passing all unkown props to children)
    // see: https://github.com/styled-components/styled-components/issues/305#issuecomment-266197867 */
`;

export default FancyButton;
export { ExtendedExample };
