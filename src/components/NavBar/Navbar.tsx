import { Navigator } from '..'
import { Image } from '@components/Image'
import logo from '@assets/images/logo.png'

export function Navbar () {
  return (
    <>
      <header className="header">
        <Image src={logo} width={50} name="logo" />
        <Navigator />
      </header>
    </>
  )
}
