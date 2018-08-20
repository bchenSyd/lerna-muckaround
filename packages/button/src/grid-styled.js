import React from "react";
import { Flex, Box } from "grid-styled";

const GridStyledComponents = () => {
  return (
   // 0-xs  column; xs-sm  column; md and lg row;  so effectively, this is max-width;
    <Flex direction={["column", "column", "row"]}>
      // https://github.com/jxnblk/grid-styled#changing-the-html-element
      <Box is="header">
        {/*https://github.com/jxnblk/grid-styled/issues/141    with has same effect as padding-right */}

        <Box width={[1, 1 / 2]}>hello</Box>
        <Box width={[1, 1 / 2]}>world</Box>
      </Box>
    </Flex>
  );
};

export default GridStyledComponents;
