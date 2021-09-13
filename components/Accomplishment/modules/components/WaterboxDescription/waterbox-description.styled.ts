import { DEVICE_SIZE } from '@constants/device-size.constant';
import styled from 'styled-components';

export const StyledWaterboxDescription = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  margin-bottom: 2.4rem;
  flex-wrap: wrap;

  .description {
    flex: 0.5;
    padding: 2.4rem;

    .waterbox {
      h2 {
        margin-bottom: 2.4rem;
      }
    }

    .features {
      h4 {
        margin-bottom: 1.2rem;
      }

      ul {
        margin-left: 2rem;

        li {
          margin-bottom: 0.4rem;
        }
      }
    }
    @media (max-width: ${DEVICE_SIZE.tablet}) {
      flex: unset;
    }
  }

  .image {
    flex: 0.5;
    padding: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 40rem;
    }

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      flex: unset;
    }
  }

  hr {
    margin: 2.4rem 0;
  }
`;
