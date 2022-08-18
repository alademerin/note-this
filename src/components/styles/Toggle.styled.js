import styled from 'styled-components';

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  height: 2rem;
  width: 4rem;
  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 25px;
  } */
  /* background: green; */
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ccc;
  transition: 0.2s;
  border-radius: ${({ rounded }) => (rounded ? '35px' : 0)};
  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 25px;
  } */

  &:before {
    position: absolute;
    content: '';
    height: 1.5rem;
    width: 1.5rem;
    left: 0.2rem;
    bottom: 0.2rem;
    background: #fff;
    border-radius: ${({ rounded }) => (rounded ? '35px' : '0')};
    transition: 0.3s all;
    /* @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 20px;
      width: 20px;
      left: 3px;
      bottom: 2.6px;
    } */
  }
  ${Checkbox}:checked + & {
    background-color: green;
  }

  ${Checkbox}:checked + &:before {
    transform: translateX(1.8rem);
    @media (max-width: ${({ theme }) => theme.mobile}) {
      transform: translateX(1.1rem);
    }
  }
`;
