import styled from '@emotion/styled';
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  border: 1px solid #999;
  border-radius: 4px;
  padding: 30px;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 20px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(192, 192, 233, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;
export const Lable = styled.label`
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const Input = styled.input`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #999;
  border-radius: 0;
  -webkit-appearance: none;
  :focus {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    outline: none;
  }
`;

export const Btn = styled.button`
  margin-top: 10px;
  max-width: 100px;
  padding: 5px;
  margin: 0 auto;
  margin-top: 10px;
  border: none;
  :hover,
  :focus {
    outline: none;
    background: #000;
    color: #fff;
  }
  cursor: pointer;
`;
