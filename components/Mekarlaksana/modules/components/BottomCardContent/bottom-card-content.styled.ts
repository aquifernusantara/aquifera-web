import styled from 'styled-components';

export const StyledBottomCardContent = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 4rem;
    white-space: nowrap;
  }

  .button-container {
    display: flex;
    justify-content: center;

    button {
      :last-child {
        margin-left: 4.8rem;
      }
    }
  }
`;
