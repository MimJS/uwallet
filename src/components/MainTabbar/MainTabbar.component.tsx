import { FC } from "react";

import { Tabbar, TabbarItem } from "@vkontakte/vkui";

import {
  Icon24DollarCircleOutline,
  Icon24HomeOutline,
  Icon24MoreHorizontal,
  Icon28UserIncomingOutline,
} from "@vkontakte/icons";

import { PATHS_SUB, subPathsKeyNames } from "../../router/router.config";

import { MainTabbarProps } from "./MainTabbar.props";
import { useNavigate } from "react-router-dom";
import { createNavigationPath } from "../../router/router.utils";

export const MainTabbar: FC<MainTabbarProps> = ({ activeTabbar }) => {
  const navigation = useNavigate();

  const selectSubView = (viewName: subPathsKeyNames) => {
    navigation(createNavigationPath("MAIN", viewName));
  };

  return (
    <Tabbar>
      <TabbarItem
        text="Главная"
        selected={activeTabbar === PATHS_SUB.MAIN.HOME}
        onClick={() => selectSubView("HOME")}
      >
        <Icon24HomeOutline />
      </TabbarItem>
      <TabbarItem
        text="Переводы"
        selected={activeTabbar === PATHS_SUB.MAIN.PAYMENTS}
        onClick={() => selectSubView("PAYMENTS")}
      >
        <Icon24DollarCircleOutline />
      </TabbarItem>
      <TabbarItem
        text="Запросы"
        selected={activeTabbar === PATHS_SUB.MAIN.REQUESTS}
        onClick={() => selectSubView("REQUESTS")}
      >
        <Icon28UserIncomingOutline width={24} height={24} />
      </TabbarItem>
      <TabbarItem
        text="Еще"
        selected={activeTabbar === PATHS_SUB.MAIN.MENU}
        onClick={() => selectSubView("MENU")}
      >
        <Icon24MoreHorizontal />
      </TabbarItem>
    </Tabbar>
  );
};
