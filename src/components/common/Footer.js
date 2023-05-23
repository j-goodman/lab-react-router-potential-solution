import "./Footer.css";

export const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer>
      <p>Northwest Animal Hospital. {year}</p>
    </footer>
  );
};

export default Footer;
