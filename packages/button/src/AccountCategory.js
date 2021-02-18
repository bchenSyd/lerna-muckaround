mport styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { accountCategoryType } from '../../../prop-types';

const Wrapper = styled.div`
  &::before {
    content: '';
    ${({
      theme: {
        table: { color },
      },
    }) => css`
      background-color: ${color.border.th};  /*=====================>  height + background-color; use color won't work */
    `};
    height: 3px;
    display: block;
    margin: 0 -12px 5px -12px;
  }
`;

const Highlight = styled(Text).attrs({ size: 2 })`
  ${({ colored, theme }) =>
    colored &&
    css`
      color: ${theme.color.heading};
    `};
  margin: 0;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;  /* we can replace css`blabla` with 'blalba' but we then lose the opportunity of validation */
    `};
`;

const AccountCategoryDetailsMobile = ({ accountCategory: { accounts } }) => {
  return (
    <Wrapper>
      {accounts.map(
        ({
          productName,
          bsbAccountNumber,
          relationShip,
          availableFunds,
          currentBalance,
        }) => (
          <Flex direction="row" mb={1} justify="space-between">
            <Flex direction="column">
              <Highlight colored bold>
                {productName}
              </Highlight>
              <Box>{bsbAccountNumber}</Box>
              <Box>{relationShip}</Box>
            </Flex>
            <Flex direction="column" align="flex-end">
              <Highlight>{currentBalance}</Highlight>
              <Box>avail: {availableFunds}</Box>
            </Flex>
          </Flex>
        )
      )}
    </Wrapper>
  );
};
