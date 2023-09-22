import { FC } from "react";

import { Icon12ChevronOutline, Icon24LockOutline } from "@vkontakte/icons";
import {
  Avatar,
  IconButton,
  Panel,
  PanelHeader,
  SimpleCell,
  View,
} from "@vkontakte/vkui";

import { ViewPageWithId } from "../../types/general";

import { BalanceBlock, SafeArea } from "../../components";

import styles from "./Home.module.css";

export const HomePage: FC<ViewPageWithId> = ({ id }) => {
  return (
    <View activePanel="homePanel" id={id}>
      <Panel id="homePanel">
        <PanelHeader separator={false} after={<></>}>
          <SimpleCell
            subtitle={
              <div className={styles.centered}>
                Настройки
                <Icon12ChevronOutline />
              </div>
            }
            before={<Avatar size={36} />}
            hasHover={false}
            after={
              <IconButton hasHover={false}>
                <Icon24LockOutline />
              </IconButton>
            }
          >
            Михаил Матеевский
          </SimpleCell>
        </PanelHeader>
        <SafeArea>
          <BalanceBlock size="l">1000000</BalanceBlock>
        </SafeArea>
      </Panel>
    </View>
  );
};
