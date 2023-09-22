import { FC } from "react";
import { ViewPageWithId } from "../../types/general";
import {
  Panel,
  PanelHeader,
  PanelHeaderContent,
  SimpleCell,
  Switch,
  View,
} from "@vkontakte/vkui";
import { TextTooltip } from "@vkontakte/vkui/dist/components/TextTooltip/TextTooltip";
import {
  Icon20HeadphonesSupportOutline,
  Icon20InfoCircleOutline,
  Icon24ColorPickerOutline,
  Icon24DocumentTextOutline,
  Icon24MoneySendOutline,
  Icon24MoreHorizontal,
  Icon28PincodeLockOutline,
  Icon24HieroglyphCharacterOutline,
  Icon24MoneyRequestOutline,
} from "@vkontakte/icons";

import {
  CustomFootnote,
  GapBlock,
  PalletBlock,
  SafeArea,
} from "../../components";

import styles from "./More.module.css";

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
          <GapBlock gap={12}>
            <PalletBlock header="Общее">
              <SimpleCell
                hasHover={false}
                after={"Русский"}
                before={<Icon24HieroglyphCharacterOutline />}
              >
                Язык
              </SimpleCell>
              <SimpleCell
                hasHover={false}
                after={"Системная"}
                before={<Icon24ColorPickerOutline />}
              >
                Тема
              </SimpleCell>
            </PalletBlock>
            <PalletBlock header="Уведомления">
              <SimpleCell
                hasHover={false}
                after={<Switch />}
                before={<Icon24MoneyRequestOutline />}
                Component="label"
              >
                Входящие переводы
              </SimpleCell>
              <SimpleCell
                hasHover={false}
                after={<Switch />}
                before={<Icon24MoneySendOutline />}
                Component="label"
              >
                Исходящие переводы
              </SimpleCell>
            </PalletBlock>
            <PalletBlock header="Безопасность">
              <SimpleCell
                hasHover={false}
                after={"Установлен"}
                before={<Icon28PincodeLockOutline width={24} height={24} />}
                indicator={
                  <TextTooltip
                    style={{ maxWidth: "min(calc(100% - 40px), 320px)" }}
                    text="Тут краткое описание для чего нужен пин-код и как он спасет человека от кражи монет"
                  >
                    <Icon20InfoCircleOutline />
                  </TextTooltip>
                }
              >
                Пин-код
              </SimpleCell>
            </PalletBlock>
            <PalletBlock header="Дополнительно">
              <SimpleCell
                hasHover={false}
                before={
                  <Icon20HeadphonesSupportOutline width={24} height={24} />
                }
              >
                Связь с UWallet
              </SimpleCell>
              <SimpleCell
                hasHover={false}
                before={<Icon24DocumentTextOutline />}
              >
                Пользовательское соглашение
              </SimpleCell>
            </PalletBlock>
            <CustomFootnote>Версия: 0.01 (beta)</CustomFootnote>
          </GapBlock>
        </SafeArea>
      </Panel>
    </View>
  );
};
