import styled from 'styled-components';

export const StyledMekarlaksanaDescription = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: justify;

  .description {
    flex: 0.5;
    padding: 2.4rem;

    h2 {
      margin-bottom: 2.4rem;
    }

    p {
      margin-bottom: 2.4rem;
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
