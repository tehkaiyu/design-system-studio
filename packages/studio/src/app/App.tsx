import { Switch, Route, Redirect } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "@xstyled/styled-components";

import { HomePage } from "features/home/HomePage";
import { DiscoverPage } from "features/discover/DiscoverPage";
import { EditorPage } from "features/editor/EditorPage";

import { GlobalStyle } from "app/globalStyles";
import { themes } from "app/themes";
import { useApp } from "app/appSlice";

export const App: React.FC = () => {
  const { state } = useApp();
  const currentTheme = themes[state.theme] as DefaultTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Switch>
        <Route path="/system/:systemId">
          <EditorPage />
        </Route>
        <Route path="/(discover|projects)">
          <DiscoverPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};
