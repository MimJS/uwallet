import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Panel, Placeholder, View } from "@vkontakte/vkui";
import { Icon56WifiOutline } from "@vkontakte/icons";

import { createNavigationPath } from "../../router/router.utils";

import styles from "./Loader.module.css";

export const LoaderPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // FIXME: kostil' remove it
    setTimeout(() => {
      navigate(createNavigationPath("MAIN", "HOME"));
    }, 1000);
  }, [navigate]);

  return (
    <View activePanel="loaderPanel">
      <Panel id="loaderPanel">
        <Placeholder icon={<Icon56WifiOutline />} header="UWallet" stretched>
          Conneting to server...
        </Placeholder>
      </Panel>
    </View>
  );
};
