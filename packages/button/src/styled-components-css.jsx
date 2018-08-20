import React, { Component } from "react";
import { render } from "react-dom";
import styled, { css } from "styled-components";
import Decoarated from "./hello-wrapper";


// https://codesandbox.io/s/48j6v915k0
const MyComponent = styled("div")`
  h1 {
    color: red
  }

 ${({ bgColor }) =>
   bgColor &&
   css`
  &:hover{
    background-color: ${bgColor};
  }`} 
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
