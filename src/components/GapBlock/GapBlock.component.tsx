import cx from "classnames";
import { FC } from "react";
import { GapBlockProps } from "./GapBlock.props";
import styles from "./GapBlock.module.css";

export const GapBlock: FC<GapBlockProps> = ({
  children,
  gap = 0,
  className = "",
}) => {
  return (
    <div
      className={cx(styles.wrapper, className)}
      style={{ "--gap": `${gap}px` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
