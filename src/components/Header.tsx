import { header, image, link } from "./Header.css";
export const Header = () => {
  return (
    <nav className={header}>
      <img className={image} src="/logo.gif" alt="Logo de Hacker News" />
      <a className={link} href="/">
        Hacker News
      </a>
    </nav>
  );
};
