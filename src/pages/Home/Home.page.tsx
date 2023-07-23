import {
  Avatar,
  Panel,
  PanelHeader,
  PanelHeaderContent,
  View,
} from "@vkontakte/vkui";
import { FC } from "react";

export const HomePage: FC = () => {
  return (
    <View activePanel="homePanel">
      <Panel id="homePanel">
        <PanelHeader separator={false}>
          <PanelHeaderContent status="Profile" before={<Avatar size={36} />}>
            Mikhail Mateevskiy
          </PanelHeaderContent>
        </PanelHeader>
      </Panel>
    </View>
  );
};
