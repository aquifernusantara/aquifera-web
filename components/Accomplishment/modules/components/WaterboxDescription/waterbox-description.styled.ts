import styled from 'styled-components';

export const StyledWaterboxDescription = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  margin-bottom: 2.4rem;

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
  }

  hr {
    margin: 2.4rem 0;
  }
`;
