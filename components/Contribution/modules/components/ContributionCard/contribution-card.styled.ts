import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

export const StyledContributionCard = styled.div`
  margin: 4.8rem auto;
  padding: 4.8rem;
  width: 80%;
  background-color: ${COLOR.primary};
  border-radius: 0.8rem;
  box-shadow: 0.8rem 0.8rem 0 0 #000;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: justify;
    color: white;
    margin-bottom: 3.6rem;
  }

  .contributor-type {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3.6rem;

    > div {
      margin: 0.5rem 2.4rem;
    }
  }

  .typeform-button {
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

    background-color: ${COLOR.secondary};
    border: 0.1rem solid black;
    border-radius: 5.4rem;

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
  }
`;
