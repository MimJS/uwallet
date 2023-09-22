import cx from "classnames";
import { FC } from "react";
import { CustomFootnoteProps } from "./CustomFootnote.props";
import { Footnote } from "@vkontakte/vkui";

import styles from "./CustomFootnote.module.css";

export const CustomFootnote: FC<CustomFootnoteProps> = ({
  className = "",
  children,
}) => {
  return (
    <Footnote className={cx(styles.wrapper, className)}>{children}</Footnote>
  );
};
