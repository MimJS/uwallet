import { FC } from "react";
import { PalletBlockProps } from "./PalletBlock.props";
import { Header } from "@vkontakte/vkui";

import styles from "./PalletBlock.module.css";

export const PalletBlock: FC<PalletBlockProps> = ({ children, header }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}>{header}</Header>
      {children}
    </div>
  );
};
