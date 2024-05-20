import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.navigationParent}>
      <div className={styles.navigation}>
        <div className={styles.items}>
          <div className={styles.explore}>
            <div className={styles.explore1}>Explore</div>
          </div>
          <a
            className={styles.helpCentre}
            href="https://www.courtsite.my/explore/category"
            target="_blank"
          >
            Help Centre
          </a>
          <a
            className={styles.helpCentre}
            href="https://www.courtsite.my/about"
            target="_blank"
          >
            About us
          </a>
          <a
            className={styles.helpCentre}
            href="https://www.courtsite.my/referral"
            target="_blank"
          >
            Refer a centre to us
          </a>
        </div>
      </div>
      <a className={styles.logo} />
    </div>
  );
};

export default Header;
