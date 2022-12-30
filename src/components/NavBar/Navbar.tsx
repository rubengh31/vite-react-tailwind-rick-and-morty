import { Navigator, Image } from '..';
import logo from '../../assets/images/logo.png';

export default function Navbar() {
  return (
    <>
      <header className="header">
        <Image src={logo} width={50} name="logo" />
        <Navigator />
      </header>
    </>
  );
}
