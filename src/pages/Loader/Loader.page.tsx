import { FC } from "react";

import { Panel, Placeholder, View } from "@vkontakte/vkui";
import { Icon56WifiOutline } from "@vkontakte/icons";

import styles from "./Loader.module.css";

export const LoaderPage: FC = () => {
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
