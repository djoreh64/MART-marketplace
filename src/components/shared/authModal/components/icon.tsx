import React, { FC, memo } from "react";
import * as S from "../styled";

export interface IconComponentProps {
  strokeWidth?: number;
  color?: string;
  width?: number;
  height?: number;
}

interface Props {
  component: React.ComponentType<IconComponentProps>;
}

const Icon: FC<Props> = memo(({ component: Component }) => (
  <S.Icon>
    <Component width={20} height={20} strokeWidth={1.5} color="currentColor" />
  </S.Icon>
));

Icon.displayName = "Icon";

export default Icon;
