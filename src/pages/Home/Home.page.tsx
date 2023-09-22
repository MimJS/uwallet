import { FC } from "react";

import { Icon12ChevronOutline } from "@vkontakte/icons";
import {
  Avatar,
  Panel,
  PanelHeader,
  PanelHeaderContent,
  View,
} from "@vkontakte/vkui";

import { ViewPageWithId } from "../../types/general";

import { BalanceBlock, SafeArea } from "../../components";

import styles from "./Home.module.css";

export const HomePage: FC<ViewPageWithId> = ({ id }) => {
  return (
    <View activePanel="homePanel" id={id}>
      <Panel id="homePanel">
        <PanelHeader separator={false}>
          <PanelHeaderContent
            status={
              <div className={styles.centered}>
                Settings
                <Icon12ChevronOutline />
              </div>
            }
            before={<Avatar size={36} />}
          >
            Mikhail Mateevskiy
          </PanelHeaderContent>
        </PanelHeader>
        <SafeArea>
          <BalanceBlock size="l">1000000</BalanceBlock>
        </SafeArea>
      </Panel>
    </View>
  );
};
