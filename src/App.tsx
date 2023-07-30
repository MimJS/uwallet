import { VKUIWrapper } from "./components";

import { RouterContainer } from "./router";

import "./styles/root.css";

export const App = () => {
  return (
    <VKUIWrapper>
      <RouterContainer />
    </VKUIWrapper>
  );
};
