/* stylelint-disable selector-type-no-unknown, selector-type-case */

import styled, { css } from 'styled-components';
import { StyledCaption } from './Caption.styles';
import { StyledColgroup } from './Colgroup.styles';
import { StyledThead } from './Thead.styles';
import { StyledTbody } from './Tbody.styles';
import { StyledTfoot } from './Tfoot.styles';
import { StyledTr } from './Tr.styles';

const classHighlighted = 'highlighted';


// https://www.styled-components.com/docs/advanced#referring-to-other-components

export const StyledTh = styled.th.attrs({
  className: ({ highlighted }) => (highlighted ? classHighlighted : null),
})`
  text-align: left;
  /* when I'm a child of [ STyledThead > STyledTr ] > & { my styles goes here}

   // https://codesandbox.io/s/48j6v915k0   the '&' is required in this case
    const Header = styled.h1`
        ${ParentComponent} > & {
            color: red;
        }
        ${ParentComponent}:hover & {

        }
    `
  
  */
  ${StyledThead} > ${StyledTr} > &,
    ${StyledTbody} > ${StyledTr} > &,
    ${StyledTfoot} > ${StyledTr} > & {
    padding: 12px;
    vertical-align: top;
    border-top: 1px solid ${({
      theme: {
        table: { color },
      },
    }) => color.border.default};
  }


  ${StyledCaption} + ${StyledThead} > ${StyledTr}:first-child > &,
    ${StyledColgroup} + ${StyledThead} > ${StyledTr}:first-child > &,
    ${StyledThead}:first-child > ${StyledTr}:first-child > & {
    border-top: 0;
  }

  ${({ rowHighlighted }) =>
    rowHighlighted &&
    css`
      ${StyledTbody} > ${StyledTr} > & {
        border-bottom: 1px solid ${({
          theme: {
            table: { color },
          },
        }) => color.border.highlight};
      }
    `};
`;
