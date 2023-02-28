import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import {
  ButtonExcluir,
  ButtonHome,
  ButtonPokedex,
  Container,
} from "./Header.styled";
import Vector from "../../assets/Vector.png";
import logo from "../../assets/logo.png";

function Header() {
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <ButtonHome onClick={() => goToPokedexPage(navigate)}>
              Ver pokedex
            </ButtonHome>
            <img src={logo} alt="" />
          </>
        );
      case "/pokedex":
        return (
          <>
            <ButtonPokedex onClick={() => goToHomePage(navigate)}>
              <img src={Vector} alt="" /> Todos Pokemóns
            </ButtonPokedex>
            <img src={logo} alt="" />
          </>
        );
      case "/details":
        return (
          <>
            <ButtonPokedex onClick={() => goToHomePage(navigate)}>
              <img src={Vector} alt="" /> Todos Pokemóns
            </ButtonPokedex>
            <img src={logo} alt="" />
            <ButtonExcluir>Excluir do Pokedéx</ButtonExcluir>
          </>
        );
      default:
        return (
          <>
            <ButtonPokedex onClick={() => goToHomePage(navigate)}>
              <img src={Vector} alt="" /> Todos Pokemóns
            </ButtonPokedex>
            <img src={logo} alt="" />
            <ButtonExcluir>Excluir do Pokedéx</ButtonExcluir>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
