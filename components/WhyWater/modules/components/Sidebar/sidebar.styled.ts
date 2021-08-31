import styled from 'styled-components';

export const StyledSidebar = styled.div`
  background-color: white;
  position: sticky;
  top: calc(7rem + 12px);

  hr {
    margin: 1.8rem 0;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    padding-right: 2px;
  }
`;
