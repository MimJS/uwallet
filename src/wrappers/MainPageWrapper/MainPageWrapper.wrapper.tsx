import { Epic } from "@vkontakte/vkui";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { MainTabbar } from "../../components";
import { PATHS_SUB } from "../../router/router.config";
import { HomePage, MorePage } from "../../pages";

export const MainPageWrapper: FC = () => {
  const { activeTabbar } = useParams();

  const activeStory = activeTabbar || PATHS_SUB.MAIN.HOME;

  return (
    <Epic
      activeStory={activeStory}
      tabbar={<MainTabbar activeTabbar={activeStory} />}
    >
      <HomePage id={PATHS_SUB.MAIN.HOME} />
      <MorePage id={PATHS_SUB.MAIN.MENU} />
    </Epic>
  );
};
