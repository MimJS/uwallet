import cx from 'classnames'

import { FC } from "react";
import { ViewPageWithId } from "../../types/general";
import { Panel, PanelHeader, PanelHeaderContent, View } from "@vkontakte/vkui";
import { Icon24MoreHorizontal } from "@vkontakte/icons";

import styles from './More.module.css'

export const MorePage: FC<ViewPageWithId> = ({ id }) => {
  return (
    <View activePanel="morePanel" id={id}>
      <Panel id="morePanel">
        <PanelHeader separator={false}>
          <PanelHeaderContent before={<Icon24MoreHorizontal />}>
            Еще
          </PanelHeaderContent>
        </PanelHeader>
      </Panel>
    </View>
  );
};
