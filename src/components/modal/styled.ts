import styled from "styled-components";

export const Modal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.2);
  animation: modal 0.2s ease-out;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  z-index: 100;
  transition: 0.2s ease-out;

  @keyframes modal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    min-width: unset;
    padding: 0;
    align-items: end;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 530px;
  padding: 36px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.textLighter};
  background-color: ${({ theme }) => theme.colors.base};
  @media screen and (max-width: 768px) {
    width: unset;
    padding: 20px;
    border-radius: 24px 24px 0 0;
  }
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 18px;
  right: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    scale: 1.1;
  }
`;
