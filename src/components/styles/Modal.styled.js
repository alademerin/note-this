import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  z-index: 3;
  display: none;
  /* padding: 10px 0; */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export const ModalCloseIcon = styled(MdOutlineArrowBackIosNew)`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.text};
`;
