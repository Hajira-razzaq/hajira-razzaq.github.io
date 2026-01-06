import React from "react";
const Nav = ({
  onServicesClick,
  onAboutClick,
  onSkillClick,
  onProjectsClick,
}) => {
  const [showSideNav, setShowSideNav] = React.useState(false);
  return (
    <>
      <header className="tmp-header-area-start header-one header--sticky header--transparent sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-content">
                <div className="tmp-mainmenu-nav d-none d-xl-block">
                  <nav className="navbar-example2 onepagenav">
                    <ul className="tmp-mainmenu nav nav-pills">
                      <li className="nav-item">
                        <a className="smoth-animation" href="/">
                          Portfolio
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="smoth-animation"
                          onClick={() => onServicesClick && onServicesClick()}
                        >
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={() => onAboutClick && onAboutClick()}
                          className="smoth-animation"
                        >
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={() => onSkillClick && onSkillClick()}
                          className="smoth-animation"
                        >
                          Skills
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          onClick={() => onProjectsClick && onProjectsClick()}
                          className="smoth-animation"
                        >
                          Projects
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          target="_blank"
                          className="smoth-animation"
                          href="https://drive.google.com/file/d/1Mzw_mjLmUsm2D653pENlMbAbNWZYpCjW/view?usp=drive_link"
                        >
                          Resume
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="tmp-header-right">
                  <div className="social-share-wrapper d-none d-md-block">
                    <div className="social-link">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/hajira-razzaq/"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a
                        aria-label="GitHub profile"
                        target="_blank"
                        href="https://github.com/Hajira-razzaq"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>

                      <a
                        aria-label="email profile"
                        href="mailto:hajira0037@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-regular fa-envelope"></i>
                      </a>
                    </div>
                  </div>

                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      onClick={() => {
                        setShowSideNav(!showSideNav);
                      }}
                      className="hamberger-menu humberger_menu_active"
                    >
                      <i
                        id="menuBtn"
                        className="fa-solid fa-bars humberger-menu"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class={`${showSideNav ? "d-block d-xl-block sidenav" : "d-none"}`}>
        <div
          class={`${
            showSideNav ? " tmp-side-nav-active" : "tmp-popup-mobile-menu"
          }`}
        >
          <div className="inner">
            <div className="header-top">
              <div className="close-menu">
                <button
                  onClick={() => {
                    setShowSideNav(false);
                  }}
                  className="close-button tmp-round-action-btn"
                >
                  <i className="fa-sharp fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            <ul className="tmp-mainmenu onepagenav-click">
              <li>
                <a className="smoth-animation" href="/">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="smoth-animation"
                  onClick={() => {
                    setShowSideNav(false);
                    onServicesClick && onServicesClick();
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="smoth-animation"
                  onClick={() => {
                    setShowSideNav(false);
                    onAboutClick && onAboutClick();
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="smoth-animation"
                  onClick={() => {
                    setShowSideNav(false);
                    onSkillClick && onSkillClick();
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="smoth-animation"
                  onClick={() => {
                    setShowSideNav(false);
                    onProjectsClick && onProjectsClick();
                  }}
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  className="smoth-animation"
                  href="https://drive.google.com/file/d/1Mzw_mjLmUsm2D653pENlMbAbNWZYpCjW/view?usp=drive_link"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>

            <div className="social-wrapper mt--20 mb--10 pl--20">
              <span className="subtitle">find with me</span>

              <div
                style={{
                  justifyContent: "center",
                }}
                className="social-link"
              >
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/hajira-razzaq/"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a target="_blank" href="https://github.com/Hajira-razzaq">
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  target="_blank"
                  href="https://wa.me/923145950908"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>

                <a
                  href="mailto:hajira0037@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
