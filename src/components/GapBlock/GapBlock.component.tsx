import { FC } from "react";
import { GapBlockProps } from "./GapBlock.props";
import styles from "./GapBlock.module.css";

export const GapBlock: FC<GapBlockProps> = ({ children, gap = 0 }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ "--gap": `${gap}px` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
