import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

import { StyledButtonProps } from './button.model';

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.8rem 3.6rem;
  margin: 0;
  min-width: 24rem;
  width: fit-content;

  position: relative;
  display: block;
  white-space: nowrap;
  appearance: none;

  text-decoration: none;
  cursor: pointer;

  background-color: ${props =>
    !props.secondary ? COLOR.secondary : COLOR.primary};
  border: ${props =>
    !props.secondary ? '.1rem solid black' : '.1rem solid white'};
  color: ${props => props.secondary && 'white'};
  border-radius: ${props => (!props.squareCorner ? '5.4rem' : '.4rem')};

  font-size: 1.6rem;
  line-height: 140%;
  font-weight: bold;

  :hover {
    top: -4px;
    box-shadow: ${props =>
      !props.secondary ? '4px 4px 0 0 #000' : '4px 4px 0 0 #fff'};
    transition: 0.1s ease-out;
  }

  :active {
    top: 0px;
    box-shadow: 0px 0px 0 0 #000;
  }
`;
