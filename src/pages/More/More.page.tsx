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
              >
                Входящие переводы
              </SimpleCell>
              <SimpleCell
                hasHover={false}
                after={<Switch />}
                before={<Icon24MoneySendOutline />}
              >
                Исходящие переводы
              </SimpleCell>
            </PalletBlock>
            <PalletBlock header="Безопасность">
            <SimpleCell
                hasHover={false}
                after={"Установлен"}
                before={<Icon28PincodeLockOutline width={24} height={24} />}
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
