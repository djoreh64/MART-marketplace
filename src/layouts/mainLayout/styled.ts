"use client";

import styled from "styled-components";

const StyledMainLayout = styled.div`
  padding-top: 120px;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 12px;
`;

export { StyledMainLayout, StyledContainer };
