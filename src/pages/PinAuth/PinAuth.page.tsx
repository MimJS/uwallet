import { Avatar, Panel, Text, View } from "@vkontakte/vkui";
import { FC } from "react";

import styles from "./PinAuth.module.css";
import { GapBlock, Keyboard, SafeArea } from "../../components";
import { Icon24CircleSmall } from "@vkontakte/icons";

export const PinAuthPage: FC = () => {
  return (
    <View activePanel="pinAuthPanel">
      <Panel id="pinAuthPanel">
        <SafeArea className={styles.stretchedWrapper}>
          <GapBlock gap={36} className={styles.wrapper}>
            <GapBlock gap={12} className={styles.userWrapper}>
              <Avatar size={56} />
              <Text className={styles.userName}>Михаил Матеевский</Text>
            </GapBlock>
            <GapBlock gap={24} className={styles.userWrapper}>
              <div className={styles.dots}>
                <Icon24CircleSmall />
                <Icon24CircleSmall />
                <Icon24CircleSmall />
                <Icon24CircleSmall />
              </div>
              <Keyboard />
            </GapBlock>
          </GapBlock>
        </SafeArea>
      </Panel>
    </View>
  );
};
