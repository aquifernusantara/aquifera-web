import styled from 'styled-components';

export const StyledSplitContent = styled.div`
  display: flex;
  padding: 4.8rem;

  .sidebar {
    flex: 0.3;
    height: 100vh;
    overflow-y: none;
  }

  .content {
    flex: 0.7;
    overflow-y: auto;
  }
`;
