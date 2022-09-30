import styled from 'styled-components';
export const ButtonWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 500;
  width: 90px;
  height: 40px;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 8px 11px -2px rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;
