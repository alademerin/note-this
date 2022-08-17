import styled from 'styled-components';

export const StyledLogoTab = styled.span`
  display: flex;
  background: #386e69;
  width: 15vw;
  height: 100%;
  align-items: center;
  padding: 0 0.3rem;

  img {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
  h3 {
    margin-left: 1rem;
    font-size: 1rem;
    color: white;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
