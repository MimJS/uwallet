import { FC } from "react";

import { Tabbar, TabbarItem } from "@vkontakte/vkui";

import { Icon24DollarCircleOutline, Icon24HomeOutline, Icon24MoreHorizontal } from "@vkontakte/icons";

import { PATHS_SUB } from "../../router/router.config";

import { MainTabbarProps } from "./MainTabbar.props";

export const MainTabbar: FC<MainTabbarProps> = ({ activeTabbar }) => {
  return (
    <Tabbar>
      <TabbarItem
        text="Главная"
        selected={activeTabbar === PATHS_SUB.MAIN.HOME}
      >
        <Icon24HomeOutline />
      </TabbarItem>
      <TabbarItem
        text="Платежи"
        selected={activeTabbar === PATHS_SUB.MAIN.PAYMENTS}
      >
        <Icon24DollarCircleOutline />
      </TabbarItem>
      <TabbarItem
        text="Еще"
        selected={activeTabbar === PATHS_SUB.MAIN.MENU}
      >
        <Icon24MoreHorizontal />
      </TabbarItem>
    </Tabbar>
  );
};
