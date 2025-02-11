"use client";

import React, { FC } from "react";
import { inputFields } from "../data";
import InputField from "./inputFields";
import * as S from "../styled";

const Inputs: FC = () => (
  <S.Inputs>
    {inputFields.map((props) => (
      <InputField key={props.placeholder} {...props} />
    ))}
  </S.Inputs>
);

export default Inputs;
