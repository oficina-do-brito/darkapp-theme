import { Header } from "../../components/Header";
import { DefaultTheme, ThemeProvider } from "styled-components";
import light from "../../css/themes/light";
import dark from "../../css/themes/dark";
import usePersistedState from "../../utils/usePesistedState";

export const Home: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const handleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header handleTheme={handleTheme} />
      Ola mundo react
    </ThemeProvider>
  );
};
