import React, { FC, InputHTMLAttributes } from "react";
import { StyledInput } from "./styled";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => (
  <StyledInput {...props} />
);

export default Input;
