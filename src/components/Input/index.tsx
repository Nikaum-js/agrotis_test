import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { FiAlertCircle } from "react-icons/fi";

import { ContentInput, ErrorContainer, InputForm, Error } from "./styles";
interface InputProps {
  name?: string;
  label?: string;
  id?: string;
  type: string;
  error?: FieldError;
  value?: any;
  disabled?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, ...rest }: InputProps,
  ref
) => {
  return (
    <ContentInput>
      {!!label && <label htmlFor={name}>{label}</label>}

      <InputForm name={name} id={name} ref={ref} {...rest} />

      {error && (
        <ErrorContainer>
          <FiAlertCircle fontSize={16} color="#AB5353" />
          <Error>{error}</Error>
        </ErrorContainer>
      )}
    </ContentInput>
  );
};

export const Input = forwardRef(InputBase);