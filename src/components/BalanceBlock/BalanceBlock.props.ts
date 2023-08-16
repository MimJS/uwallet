import { ReactNode } from "react";

export interface BalanceBlockActionTypes {
  children?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface BalanceBlockProps {
  size?: "s" | "l";
  children: number | string;
  className?: string;
  actions?: BalanceBlockActionTypes[];
}
