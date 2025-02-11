"use client";

import React from "react";
import { authTexts as texts } from "../data";
import { useAuthContextValue } from "../hooks/useAuthContextValue";
import { StyledCompanyAuthLink } from "../styled";

const CompanyAuthLink = () => {
  const { authType: type, setAuthType } = useAuthContextValue();
  const nextType = type === "register" ? "registerCompany" : "register";

  if (!texts[type].companyAuthLink) return;

  return (
    <StyledCompanyAuthLink onClick={() => setAuthType(nextType)}>
      {texts[type].companyAuthLink}
    </StyledCompanyAuthLink>
  );
};

export default CompanyAuthLink;
