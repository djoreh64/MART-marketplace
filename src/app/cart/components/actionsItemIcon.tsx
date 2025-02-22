import React, { FC } from "react";
import { Heart, Trash } from "lucide-react";

interface Props {
  type: "favourite" | "delete";
}

const ActionsItemIcon: FC<Props> = ({ type }) => {
  if (type === "favourite") return <Heart size={16} fill="#000" />;
  return <Trash size={16} fill="#000" />;
};

export default ActionsItemIcon;
