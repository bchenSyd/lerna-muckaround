import React from 'react';
import {Flex, Box} from 'grid-styled';


const GridStyledComponents = () => {
    return (
        // https://github.com/jxnblk/grid-styled#changing-the-html-element
        <Box is="header" >
             {/*https://github.com/jxnblk/grid-styled/issues/141    with has same effect as padding-right */}
             
             <Box width={[1,1/2]}>hello</Box>
             <Box width={[1,1/2]}>world</Box>
        </Box>
    );
};



export default GridStyledComponents;