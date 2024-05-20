import QuickLinksSection from "../components/QuickLinksSection";
import EmaiSection from "../components/EmaiSection";
import Header from "../components/Header";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="desktop-1">
        <div className="text">{` `}</div>
        <div className="already-have-an-container">
          <span>{`Already have an account? `}</span>
          <span className="log-in">Log in</span>
          <span>{` `}</span>
        </div>
        <b className="create-an-account">Create an account</b>
        <div className="desktop-1-child" />
        <img
          className="user-interfacehide-icon"
          alt=""
          src="/24user-interfacehide.svg"
        />
        <button className="desktop-1-item" />
        <div className="desktop-1-inner" />
        <div className="div">*******************</div>
        <div className="confirm-password">Confirm Password</div>
        <img
          className="user-interfacehide-icon1"
          alt=""
          src="/24user-interfacehide.svg"
        />
        <img className="image-39-icon" alt="" src="/image-39@2x.png" />
      </div>
      <QuickLinksSection />
      <div className="password">Password</div>
      <div className="by-creating-an-container">
        <span>{`By creating an account, you agree to the `}</span>
        <span className="tems-of-use">Tems of use</span>
        <span>{` and `}</span>
        <span className="tems-of-use">Privacy Policy</span>
        <span>{` `}</span>
      </div>
      <div className="or-login-with">Or login with</div>
      <b className="facebook">Facebook</b>
      <b className="linkedin">LinkedIn</b>
      <b className="google">Google</b>
      <div className="create-an-account1">Create an account</div>
      <EmaiSection
        emaiSectionPosition="absolute"
        emaiSectionTop="450px"
        emaiSectionLeft="158px"
      />
      <div className="div1">*******************</div>
      <Header />
    </div>
  );
};

export default SignUp;
