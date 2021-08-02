import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

export const StyledPromotionalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  box-shadow: 0.4rem 0.4rem 0 0 #000;
  border-radius: 0.8rem;
  border: 0.2rem solid black;
  margin: 6.4rem;
  min-width: 30rem;
  text-align: center;
  min-height: 40rem;
  cursor: default;
  flex: 0.3;
  transition: 0.2s ease-in-out;

  @media (max-width: 1190px) {
    margin: 2.4rem;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2.4rem;
  }

  .description {
    font-size: 2rem;
    font-family: 'Karla';
    font-weight: 300;
    line-height: 160%;
    margin-bottom: 1.2rem;
  }

  .additional-description {
    font-size: 1.2rem;
    font-family: 'Montserrat';
    font-weight: bold;
  }

  .card-pattern {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  :hover {
    background-color: ${COLOR.primary};
    color: white;
    transform: translateY(-3.2rem);
  }
`;
