import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  margin-top: 2rem;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;

  padding: 0 2rem;

  background: var(--color_brand_primary_darkest);

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: var(--color_white);
  }

  button {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 0.875rem;
    letter-spacing: 0.0313rem;
    text-align: center;

    padding: 0.6875rem 1rem 0.6875rem 1rem;
    border-radius: 0.125rem;

    color: var(--color_white);

    transition: 0.1s;

    :hover {
      background: var(--color_brand_primary_medium);
    }
  }
`;

export const FormContent = styled.form`
  height: 398px;
  width: 1200px;

  background: var(--color_white);

  form {
    margin: 32px 16px;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }
`;
