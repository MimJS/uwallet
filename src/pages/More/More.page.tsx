import cx from "classnames";

import { FC } from "react";
import { ViewPageWithId } from "../../types/general";
import {
  Footnote,
  Panel,
  PanelHeader,
  PanelHeaderContent,
  SimpleCell,
  Switch,
  View,
} from "@vkontakte/vkui";
import {
  Icon20HeadphonesSupportOutline,
  Icon20InfoCircleOutline,
  Icon24ColorPickerOutline,
  Icon24DocumentTextOutline,
  Icon24MoneySendOutline,
  Icon24MoreHorizontal,
  Icon28PincodeLockOutline,
} from "@vkontakte/icons";
import { GapBlock, PalletBlock, SafeArea } from "../../components";
import {
  Icon24HieroglyphCharacterOutline,
  Icon24MoneyRequestOutline,
} from "@vkontakte/icons";

import styles from "./More.module.css";
import { TextTooltip } from "@vkontakte/vkui/dist/components/TextTooltip/TextTooltip";

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
            <Footnote className={styles.version}>Версия: 0.01 (beta)</Footnote>
          </GapBlock>
        </SafeArea>
      </Panel>
    </View>
  );
};
