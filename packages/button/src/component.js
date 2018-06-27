import React from "react";
import styled from "styled-components";

export const MyComponent = styled(({ className, name, ...rest }) => (
  <input className={className} value={name} {...rest} />
))`
  font-size: 2.5em;
`;

// extend can only update `className`,
// attrs can update any props , but relying on component being wrapped passing on props
// down to leaf DOM elements
const Decorated = MyComponent.extend.attrs({
  type: "password"
})``;

// you can't do YourComponent.attrs({prop: value}) as once a Component is defined and being used,
// it's very dangerouse to modify it;
// that's why `.extend` comes to play, seee https://github.com/styled-components/styled-components/issues/1250#issuecomment-337181485

export default Decorated;
