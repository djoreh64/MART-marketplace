import React, { FC, SVGProps } from "react";
import { Heart, Trash } from "lucide-react";

interface Props extends SVGProps<SVGSVGElement> {
  type: "favourite" | "delete";
}

const ActionsItemIcon: FC<Props> = ({ type, ...props }) => {
  if (type === "favourite") return <Heart size={16} {...props} />;
  return <Trash fill="#000" size={16} />;
};

export default ActionsItemIcon;
