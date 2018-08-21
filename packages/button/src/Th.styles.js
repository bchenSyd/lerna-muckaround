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

  ${StyledThead} > ${StyledTr} > & {
    vertical-align: bottom;
    border-bottom: 3px solid ${({
      theme: {
        table: { color },
      },
    }) => color.border.th};
    font-weight: 500;
    color: ${({
      theme: {
        table: { color },
      },
    }) => color.font.th};
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

  ${({ highlighted }) =>
    highlighted &&
    css`
      border-left: 6px solid
        ${({
          theme: {
            table: { color },
          },
        }) => color.border.highlight};
      border-bottom: 1px solid
        ${({
          theme: {
            table: { color },
          },
        }) => color.border.highlight};

      &.${classHighlighted} + & {
        border-left: 0 none;
      }
    `};

  ${({ bordered }) =>
    bordered &&
    css`
      border-left: 1px solid ${({
        theme: {
          table: { color },
        },
      }) => color.border.default};
      border-right: 1px solid ${({
        theme: {
          table: { color },
        },
      }) => color.border.default};

      ${StyledCaption} + ${StyledThead} > ${StyledTr}:first-child > & {
        border-top: 1px solid ${({
          theme: {
            table: { color },
          },
        }) => color.border.default};
      }

      ${StyledThead} > ${StyledTr} > & {
        border-bottom-width: 2px;
      }
    `};

  ${({ highlighted, bordered }) =>
    highlighted &&
    bordered &&
    css`
      ${StyledTbody} > ${StyledTr} > & + & {
        border-left: 1px solid ${({
          theme: {
            table: { color },
          },
        }) => color.border.default};
      }
    `};

  ${({ theme, responsive }) =>
    responsive &&
    theme.breakpointMax.xs`
      white-space: nowrap;
    `};

  ${({ theme, responsive, highlighted }) =>
    responsive &&
    highlighted &&
    theme.breakpointMax.xs`
      &:first-child {
        border-left: 6px solid ${({
          theme: {
            table: { color },
          },
        }) => color.border.highlight};
      }
    `};

  ${({ theme, responsive, bordered }) =>
    responsive &&
    bordered &&
    theme.breakpointMax.xs`
      &:first-child {
        border-left: 0;
      }
      &:last-child {
        border-right: 0;
      }

      ${StyledTr}:last-child > & {
        border-bottom: 0;
      }
    `};
`;
