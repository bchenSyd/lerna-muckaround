import React, { Component } from "react";
import { render } from "react-dom";
import styled, { css } from "styled-components";
import Decoarated from "./hello-wrapper";

// https://codesandbox.io/s/48j6v915k0
const MyComponent = styled("div")`
  h1 {
    color: red;
  }

  ${({ bgColor }) =>
    bgColor &&
    // 1. if we were not using ${bgColor}, we could just put it under a normal string; see example below
    // 2. looks like in this example, if we remove `css` but keep back tilt `, it still works
    css`
      &:hover {
        background-color: ${bgColor};
      }
    `} ${({ bgColor }) => bgColor && "&:hover{ border: 1px solid grey}"};
`;

class App extends Component {
  render() {
    return (
      <MyComponent bgColor="#aabbee">
        <h1>hello,world</h1>
        <Decoarated name="CodeSandbox" size="big" />
      </MyComponent>
    );
  }
}

render(<App />, document.getElementById("root"));
