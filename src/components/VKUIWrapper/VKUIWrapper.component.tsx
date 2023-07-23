import { FC } from "react";
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

import "@vkontakte/vkui/dist/vkui.css";

import { VKUIWrapperProps } from "./VKUIWrapper.props";

export const VKUIRootWrapper: FC<VKUIWrapperProps> = ({ children }) => {
  bridge.send("VKWebAppInit");

  return (
    <ConfigProvider>
      <AdaptivityProvider>{children}</AdaptivityProvider>
    </ConfigProvider>
  );
};

export const VKUIWrapper: FC<VKUIWrapperProps> = ({ children }) => {
  return (
    <AppRoot>
      <SplitLayout>{children}</SplitLayout>
    </AppRoot>
  );
};
