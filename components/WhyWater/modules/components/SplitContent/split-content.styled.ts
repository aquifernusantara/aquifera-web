import styled from 'styled-components';

export const StyledSplitContent = styled.div`
  display: flex;
  padding: 4.8rem;

  .sidebar {
    flex: 0.3;
    overflow-y: none;
  }

  .content {
    flex: 0.7;
    overflow-y: auto;
  }
`;
