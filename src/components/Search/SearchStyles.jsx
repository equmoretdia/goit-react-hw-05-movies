import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    border-color: #353535;
  }
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  background-color: inherit;
  border: none;
  padding: 5px;
  &::placeholder {
    font: inherit;
  }
`;

const FormButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 30px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export { Form, Input, FormButton };
