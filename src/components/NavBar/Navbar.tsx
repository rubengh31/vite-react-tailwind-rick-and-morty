import { Navigator, Image, GenericInput } from '..';
import styles from './Navbar.module.scss';
import logo from '@/assets/images/logo.png';

export default function Navbar({ theme, handleTheme }: any) {
  let input: any;

  if (theme === 'dark') {
    input = (
      <>
        <GenericInput
          type="button"
          onClick={handleTheme}
          value="light"
          className="text-xs text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        />
      </>
    );
  } else {
    input = (
      <>
        <GenericInput
          type="button"
          onClick={handleTheme}
          value="dark"
          className="text-xs text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        />
      </>
    );
  }

  return (
    <>
      <header className={`${styles.header} ${theme}`}>
        <Image src={logo} width="50" alt="logo" />
        <Navigator input={input} />
      </header>
    </>
  );
}
