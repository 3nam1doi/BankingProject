import QuickLinksSection from "../components/QuickLinksSection";
import EmaiSection from "../components/EmaiSection";
import Header from "../components/Header";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.desktop1}>
        <div className={styles.text}>{` `}</div>
        <div className={styles.alreadyHaveAnContainer}>
          <span>{`Already have an account? `}</span>
          <span className={styles.logIn}>Log in</span>
          <span>{` `}</span>
        </div>
        <b className={styles.createAnAccount}>Create an account</b>
        <div className={styles.desktop1Child} />
        <img
          className={styles.userInterfacehideIcon}
          alt=""
          src="/24user-interfacehide.svg"
        />
        <button className={styles.desktop1Item} />
        <div className={styles.desktop1Inner} />
        <div className={styles.div}>*******************</div>
        <div className={styles.confirmPassword}>Confirm Password</div>
        <img
          className={styles.userInterfacehideIcon1}
          alt=""
          src="/24user-interfacehide.svg"
        />
        <img className={styles.image39Icon} alt="" src="/image-39@2x.png" />
      </div>
      <QuickLinksSection />
      <div className={styles.password}>Password</div>
      <div className={styles.byCreatingAnContainer}>
        <span>{`By creating an account, you agree to the `}</span>
        <span className={styles.temsOfUse}>Tems of use</span>
        <span>{` and `}</span>
        <span className={styles.temsOfUse}>Privacy Policy</span>
        <span>{` `}</span>
      </div>
      <div className={styles.orLoginWith}>Or login with</div>
      <b className={styles.facebook}>Facebook</b>
      <b className={styles.linkedin}>LinkedIn</b>
      <b className={styles.google}>Google</b>
      <div className={styles.createAnAccount1}>Create an account</div>
      <EmaiSection
        emaiSectionPosition="absolute"
        emaiSectionTop="450px"
        emaiSectionLeft="158px"
      />
      <div className={styles.div1}>*******************</div>
      <Header />
    </div>
  );
};

export default SignUp;
