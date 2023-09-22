import cx from "classnames";

import { FC } from "react";
import { ViewPageWithId } from "../../types/general";
import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
  SimpleCell,
  View,
} from "@vkontakte/vkui";
import { Icon24MoreHorizontal } from "@vkontakte/icons";
import { PalletBlock } from "../../components/PalletBlock";

import styles from "./More.module.css";
import { SafeArea } from "../../components";

export const MorePage: FC<ViewPageWithId> = ({ id }) => {
  return (
    <View activePanel="morePanel" id={id}>
      <Panel id="morePanel">
        <PanelHeader separator={false}>
          <PanelHeaderContent before={<Icon24MoreHorizontal />}>
            Еще
          </PanelHeaderContent>
        </PanelHeader>
        <SafeArea>
          <PalletBlock header="Общее">
            <SimpleCell hasHover={false} after={"Русский"}>Язык</SimpleCell>
            <SimpleCell hasHover={false} after={"Системная"}>Тема</SimpleCell>
          </PalletBlock>
        </SafeArea>
      </Panel>
    </View>
  );
};
