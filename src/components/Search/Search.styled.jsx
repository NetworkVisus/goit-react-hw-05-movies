import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const Input = styled.input`
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #707070;
  font-size: 15px;
  &::placeholder {
    text-align: center;
    font-size: 13px;
    color: #707070;
  }
`;
