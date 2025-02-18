"use client";

import styled from "styled-components";

const StyledMainLayout = styled.div`
  padding-top: 100px;

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 12px;
`;

export { StyledMainLayout, StyledContainer };
