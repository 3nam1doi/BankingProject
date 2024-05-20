import "./Header.css";

const Header = () => {
  return (
    <div className="navigation-parent">
      <div className="navigation">
        <div className="items">
          <div className="explore">
            <div className="explore1">Explore</div>
          </div>
          <a
            className="help-centre"
            href="https://www.courtsite.my/explore/category"
            target="_blank"
          >
            Help Centre
          </a>
          <a
            className="help-centre"
            href="https://www.courtsite.my/about"
            target="_blank"
          >
            About us
          </a>
          <a
            className="help-centre"
            href="https://www.courtsite.my/referral"
            target="_blank"
          >
            Refer a centre to us
          </a>
        </div>
      </div>
      <a className="logo" />
    </div>
  );
};

export default Header;
