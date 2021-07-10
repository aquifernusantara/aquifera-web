import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

export const StyledButton = styled.button`
  padding: 0.8rem 3.6rem;
  margin: 0;
  min-width: 24rem;
  width: fit-content;
  border-radius: 5.4rem;

  position: relative;
  display: block;
  white-space: nowrap;
  appearance: none;

  text-decoration: none;
  cursor: pointer;
  border: none;

  background-color: ${COLOR.secondary};
  border: 1px solid black;

  font-size: 1.6rem;
  line-height: 140%;
  font-weight: bold;

  :hover {
    top: -4px;
    box-shadow: 4px 4px 0 0 #000;
    transition: 0.1s ease-out;
  }

  :active {
    top: 0px;
    box-shadow: 0px 0px 0 0 #000;
  }
`;
