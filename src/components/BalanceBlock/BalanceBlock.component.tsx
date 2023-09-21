import cx from "classnames";

import { FC } from "react";

import { ReactComponent as CoinIcon } from "../../assets/icons/uwallet.svg";

import { formatNumber } from "../../utils";

import {
  BalanceBlockActionTypes,
  BalanceBlockProps,
} from "./BalanceBlock.props";

import styles from "./BalanceBlock.module.css";

const SIZES_WITH_TITLE = ["l"];

export const BalanceBlockAction: FC<BalanceBlockActionTypes> = ({
  icon,
  children,
  onClick = () => {},
}) => {
  return (
    <div className={styles.action} onClick={onClick}>
      {icon ? <div className={styles.action__icon}>{icon}</div> : null}
      {children ? (
        <div className={styles.action__text}>
          <span className={styles.action__text_in}>{children}</span>
        </div>
      ) : null}
    </div>
  );
};

export const BalanceBlock: FC<BalanceBlockProps> = ({
  children,
  size = "s",
  className = "",
  actions,
}) => {
  return (
    <div
      className={cx(styles.wrapper, {
        [className]: className,
        [styles[`wrapper--size-${size}`]]: size,
        [styles["wrapper--with-actions"]]: actions && actions.length > 0,
      })}
    >
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

      {actions && actions.length > 0 ? (
        <div className={styles.actions}>
          {actions.map((actionItem: BalanceBlockActionTypes) => {
            return <BalanceBlockAction {...actionItem} />;
          })}
        </div>
      ) : null}
    </div>
  );
};
