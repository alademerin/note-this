import styled from 'styled-components';

export const StyledDivBlock = styled.div`
  display: flex;
  width: 40vw;
  height: 100vh;
  background: #58b3ac;
  color: black;
`;

export const StyledDivBlockThin = styled(StyledDivBlock)`
  min-width: 15vw;
  height: 92vh;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
