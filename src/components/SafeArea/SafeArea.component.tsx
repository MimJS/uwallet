import { FC } from "react";

import { SafeAreaProps } from "./SafeArea.props";

import styles from "./SafeArea.module.css";

export const SafeArea: FC<SafeAreaProps> = ({ paddings, children }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        padding: paddings,
      }}
    >
      {children}
    </div>
  );
};
