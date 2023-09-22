import cx from "classnames";
import { FC } from "react";
import { KeyboardProps } from "./Keyboard.props";

import styles from "./Keyboard.module.css";
import { IconButton } from "@vkontakte/vkui";

const KEYBOARD_BUILDER = [
  [
    {
      value: 1,
      key: "num-1",
    },
    {
      value: 2,
      key: "num-2",
    },
    {
      value: 3,
      key: "num-3",
    },
  ],
  [
    {
      value: 4,
      key: "num-4",
    },
    {
      value: 5,
      key: "num-5",
    },
    {
      value: 6,
      key: "num-6",
    },
  ],
  [
    {
      value: 7,
      key: "num-7",
    },
    {
      value: 8,
      key: "num-8",
    },
    {
      value: 9,
      key: "num-9",
    },
  ],
  [
    {
      value: 0,
      key: "num-0",
    },
  ],
];

export const Keyboard: FC<KeyboardProps> = ({
  onInput = () => {},
  className = "",
}) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      {KEYBOARD_BUILDER.map((keyboardLayer) => {
        return (
          <div className={styles.layer} key={`Wrapper-${keyboardLayer[0].key}`}>
            {keyboardLayer.map((keyboardKey) => {
              return (
                <IconButton
                  hasHover={false}
                  key={keyboardKey.key}
                  onClick={() => {
                    onInput(keyboardKey.value);
                  }}
                >
                  {keyboardKey.value}
                </IconButton>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
