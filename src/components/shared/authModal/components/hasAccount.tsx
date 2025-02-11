"use client";

import { FC } from "react";
import * as S from "../styled";
import { useAuthContextValue } from "../hooks/useAuthContextValue";
import { authTexts as texts } from "../data";

const HasAccount: FC = () => {
  const { authType, setAuthType } = useAuthContextValue();
  const { hasAccountText, hasAccountButton } = texts[authType];
  const nextType = authType === "login" ? "register" : "login";

  return (
    <S.HasAccount>
      <span>{hasAccountText}</span>
      <button onClick={() => setAuthType(nextType)} type="button">
        {hasAccountButton}
      </button>
    </S.HasAccount>
  );
};

export default HasAccount;
