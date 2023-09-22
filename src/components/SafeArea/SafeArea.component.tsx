import cx from "classnames";
import { FC } from "react";

import { SafeAreaProps } from "./SafeArea.props";

import styles from "./SafeArea.module.css";

export const SafeArea: FC<SafeAreaProps> = ({
  paddings,
  children,
  className,
}) => {
  return (
    <div
      className={cx(styles.wrapper, className)}
      style={{
        padding: paddings,
      }}
    >
      {children}
    </div>
  );
};
