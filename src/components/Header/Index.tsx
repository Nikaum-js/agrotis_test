import AgrotisLogo from "../../assets/logo.svg";
import { HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContent>
      <img src={AgrotisLogo} alt="Agrotis" />
    </HeaderContent>
  );
}
