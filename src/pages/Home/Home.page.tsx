import { FC } from "react";

import {
  Icon12ChevronOutline,
  Icon24LockOutline,
  Icon28MoneyRequestOutline,
  Icon28MoneySendOutline,
} from "@vkontakte/icons";
import {
  Avatar,
  IconButton,
  Panel,
  PanelHeader,
  Search,
  SimpleCell,
  View,
} from "@vkontakte/vkui";

import { ViewPageWithId } from "../../types/general";

import {
  BalanceBlock,
  CustomFootnote,
  GapBlock,
  SafeArea,
  TransferHistoryCell,
} from "../../components";

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
        <SafeArea className={styles.wrapper}>
          <GapBlock gap={24}>
            <BalanceBlock
              size="l"
              actions={[
                {
                  icon: <Icon28MoneySendOutline />,
                  children: "Отправить",
                },
                {
                  icon: <Icon28MoneyRequestOutline />,
                  children: "Получить",
                },
              ]}
            >
              1000000
            </BalanceBlock>
            <Search />
            {/* <CustomFootnote className={styles.footNote}>
              Ничего не найдено
            </CustomFootnote> */}
            <TransferHistoryCell
              transferData={{
                id: 1,
                status: "progress",
                type: "remove",
                category: "transfer",
                sum: 10199.12,
                userData: { id: 1 },
              }}
            />
          </GapBlock>
        </SafeArea>
      </Panel>
    </View>
  );
};
