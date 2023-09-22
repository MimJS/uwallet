import cx from "classnames";
import { FC } from "react";
import {
  TransferData,
  TransferHistoryCellProps,
} from "./TransferHistoryCell.props";
import { Avatar, SimpleCell, Text } from "@vkontakte/vkui";
import { Icon16ClockOutline } from "@vkontakte/icons";

import { formatNumber } from "../../utils";

import styles from "./TransferHistoryCell.module.css";

export const TransferHistoryCell: FC<TransferHistoryCellProps> = ({
  className = "",
  onClick = () => {},
  transferData,
}) => {
  const isPositive = transferData.type === "add";

  const categoryNameToHuman = (categoryName: TransferData["category"]) => {
    if (categoryName === "gift") {
      return "Подарок";
    }

    if (categoryName === "transfer") {
      return "Перевод";
    }
  };

  return (
    <SimpleCell
      key={transferData.id}
      className={cx(styles.wrapper, className)}
      before={<Avatar size={32} />}
      hasHover={false}
      indicator={
        <Text
          className={cx({
            [styles.sum_positive]: isPositive,
            [styles.sum_negative]: transferData.status === "error",
            [styles.sum_neutral]:
              transferData.status !== "error" && !isPositive,
          })}
        >
          {isPositive ? "+" : "-"} {formatNumber(transferData.sum)}
        </Text>
      }
      after={
        transferData.status === "progress" && transferData.type === "remove" ? (
          <Icon16ClockOutline />
        ) : null
      }
      subtitle={categoryNameToHuman(transferData.category)}
      onClick={() => {
        onClick(transferData.id);
      }}
    >
      <Text className={styles.userName}>@id{transferData.userData?.id}</Text>
    </SimpleCell>
  );
};
