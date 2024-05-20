import { useMemo } from "react";
import "./EmaiSection.css";

const EmaiSection = ({
  emaiSectionPosition,
  emaiSectionTop,
  emaiSectionLeft,
}) => {
  const emaiSectionStyle = useMemo(() => {
    return {
      position: emaiSectionPosition,
      top: emaiSectionTop,
      left: emaiSectionLeft,
    };
  }, [emaiSectionPosition, emaiSectionTop, emaiSectionLeft]);

  return (
    <div className="emai-section" style={emaiSectionStyle}>
      <div className="emai-section-child" />
      <div className="emai-section-item" />
      <div className="email-address">Email Address</div>
      <div className="duyphamgmailcom">duypham@gmail.com</div>
    </div>
  );
};

export default EmaiSection;
