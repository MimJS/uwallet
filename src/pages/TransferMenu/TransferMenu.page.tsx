import { Icon24DollarCircleOutline } from "@vkontakte/icons";
import { Panel, PanelHeader, PanelHeaderContent, View } from "@vkontakte/vkui";
import { FC } from "react";
import { ViewPageWithId } from "../../types/general";

export const TransferMenuPage: FC<ViewPageWithId> = ({ id }) => {
  return (
    <View activePanel="tranferMenuPanel" id={id}>
      <Panel id="tranferMenuPanel">
        <PanelHeader separator={false}>
          <PanelHeaderContent before={<Icon24DollarCircleOutline />}>
            Переводы
          </PanelHeaderContent>
        </PanelHeader>
      </Panel>
    </View>
  );
};
