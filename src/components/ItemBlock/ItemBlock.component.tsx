import { FC } from "react";

import { SimpleCell } from "@vkontakte/vkui";
import { Icon20CircleOutline } from "@vkontakte/icons";

import styles from "./ItemBlock.module.css";

export const ItemBlock: FC = () => {
  return (
    <SimpleCell
      before={
        <Icon20CircleOutline
          width={40}
          height={40}
          className={styles.beforeIcon}
        />
      }
      subhead="Баланс:"
      hasActive={false}
      hasHover={false}
      className={styles.wrapper}
    >
      5 000 000,00
    </SimpleCell>
  );
};
