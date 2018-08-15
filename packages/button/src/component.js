import React from "react";
import styled from "styled-components";

// white listing props passed down to children
export const MyComponent = styled(({ className, name, ...rest }) => (
  <input className={className} value={name} {...rest} />
))`
  font-size: 2.5em;
`;

const extendedComponent = MyComponent.extend`
  color:'must be css prop ONLY';
`

// extend can only update `className`,
// attrs can update any props
// note: all extends/attrs rely on component being wrapped passing on props (className and ...restProps)
// down to leaf DOM elements )
const Decorated = MyComponent.extend.attrs({
  type: "password", // ...resProps change;
})``; //  you need the two backticks at the end even if you don't want to override the styles; or you can use `recompose`


const Exception = styled.a.attrs({ target: "_blank" })``;

// btw, guys don't you think that this is not that obvious that attrs mutate given component instead cloning it?
// I have not found in documentation that attrs should be used with extend
// only exception being :

// you can't do YourComponent.attrs({prop: value}) as once a Component is defined and being used, it's very dangerouse to modify it
// however, you can do styled(YourComponent).attrs({prop:'value})`` , or YourComponent.extend.attrs({})``
// that's why `.extend` comes to play,
// see https://github.com/styled-components/styled-components/issues/1250#issuecomment-337181485

export default Decorated;
