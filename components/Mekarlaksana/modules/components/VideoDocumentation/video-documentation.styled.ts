import { DEVICE_SIZE } from '@constants/device-size.constant';
import styled from 'styled-components';

export const StyledVideoDocumentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  margin-bottom: 4.8rem;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 1.8rem;
  }

  .title {
    margin-bottom: 1.6rem;
    font-size: 1.8rem;
    font-weight: 700;
  }

  .iframe {
    border-radius: 1.2rem;
    border: 2px solid #1b1b1b;
    width: 100%;
    max-width: 700px;

    box-shadow: 0.8rem 0.8rem 0 0 #000;
  }
`;
