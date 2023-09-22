import cx from "classnames";

import { FC } from "react";

import { ReactComponent as CoinIcon } from "../../assets/icons/uwallet.svg";

import { formatNumber } from "../../utils";

import {
  BalanceBlockActionTypes,
  BalanceBlockProps,
} from "./BalanceBlock.props";

import styles from "./BalanceBlock.module.css";
import { GapBlock } from "../GapBlock";
import { Tappable, Text } from "@vkontakte/vkui";

const SIZES_WITH_TITLE = ["l"];

export const BalanceBlockAction: FC<BalanceBlockActionTypes> = ({
  icon,
  children,
  onClick = () => {},
}) => {
  return (
    <Tappable hasHover={false} className={styles.action} onClick={onClick}>
      {icon ? <div className={styles.action__icon}>{icon}</div> : null}
      {children ? (
        <div className={styles.action__text}>
          <Text className={styles.action__text_in}>{children}</Text>
        </div>
      ) : null}
    </Tappable>
  );
};

export const BalanceBlock: FC<BalanceBlockProps> = ({
  children,
  size = "s",
  className = "",
  actions,
}) => {
  return (
    <GapBlock
      gap={12}
      className={cx(styles.wrapper, {
        [className]: className,
        [styles[`wrapper--size-${size}`]]: size,
        [styles["wrapper--with-actions"]]: actions && actions.length > 0,
      })}
    >
      <div className={styles.wrapper__in}>
        {SIZES_WITH_TITLE.includes(size) ? (
          <div className={styles.title}>
            <span className={styles.title__in}>баланс:</span>
          </div>
        ) : null}

        <div className={styles.count}>
          <div className={styles.count__text}>
            <span className={styles.count__in}>{formatNumber(children)}</span>
            <CoinIcon className={styles.count__icon} />
          </div>
        </div>
      </div>

      {actions && actions.length > 0 ? (
        <div className={styles.actions}>
          {actions.map((actionItem: BalanceBlockActionTypes) => {
            return <BalanceBlockAction {...actionItem} />;
          })}
        </div>
      ) : null}
    </GapBlock>
  );
};
