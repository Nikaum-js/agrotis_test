import styled from "styled-components";

export const ContentInput = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 0.9rem;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.text_light};
    margin-bottom: 8px;
  }
`;

export const InputForm = styled.input`
  height: 60px;
  width: 295px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.input_color};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.input_border};
  padding: 16px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text_pure};
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary_pure};
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: -26px;
`;

export const Error = styled.span`
  margin-left: 4px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.attention};
`;
