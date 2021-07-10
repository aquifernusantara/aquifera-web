import styled from 'styled-components';

export const StyledHero = styled.section`
  height: 100vh;

  video {
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    padding-top: 7rem;
    padding-left: 5%;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );

    .title {
      margin-bottom: 2.4rem;
      h1 {
        font-weight: bold;
        font-size: 64px;
      }
    }
  }
`;
