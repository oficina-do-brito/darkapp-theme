import { HeaderStyle } from "./styles";
import Switch from "react-switch";
//para acessar de dentro do styled component o nosso tema
import { ThemeContext } from "styled-components";
import { useContext } from "react";

interface Props {
  handleTheme(): void;
}
export const Header: React.FC<Props> = ({ handleTheme }) => {
  const contextTheme = useContext(ThemeContext);

  return (
    <>
      <HeaderStyle>
        <h1>header</h1>
        <Switch
          onChange={handleTheme}
          checked={contextTheme.title === "dark"}
          checkedIcon={false}
          uncheckedIcon={true}
          offColor={contextTheme.colors.quaternary}
          onColor={contextTheme.colors.terciary}
        ></Switch>
      </HeaderStyle>
    </>
  );
};
