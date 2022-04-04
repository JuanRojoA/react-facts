import logo from "../img/logo.png";

export default function Header() {
  return (
    <header className="page-header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="React logo" className="logo-img" />
          <span className="logo-txt">ReacFacts</span>
        </div>
        <div className="desc-text-container">
          <a
            href="https://github.com/JuanRojoA"
            target="_blank"
            rel="noreferrer"
            className="desc-txt"
          >
            React Course - Project 1
          </a>
        </div>
      </nav>
    </header>
  );
}
