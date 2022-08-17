import styled from 'styled-components';

export const RowContainer = styled.div`
  display: flex;
  flex: row;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export const SpreadItems = styled(RowContainer)`
  justify-content: space-between;
  flex-direction:row
`;

export const DetailsRowContainer = styled(RowContainer)`
  justify-content: space-between;
  width:100%;
  /* background:red; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
