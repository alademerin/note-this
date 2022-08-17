import styled from 'styled-components';

export const StyledProfileTab = styled.span`
  display: flex;
  background: white;
  color: #bbb;
  align-items: center;
  height: 100%;
  width: 20vw;
  border-bottom: 0.5px solid #ddd;

  img {
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
  }
  p{
    margin-left: 1rem;

  }
  h6 {
    font-weight: 500;
    :hover {
      color: #ea4c89;
    }
  }
`;
