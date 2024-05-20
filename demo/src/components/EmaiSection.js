import { useMemo } from "react";
import styles from "./EmaiSection.module.css";

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
    <div className={styles.emaiSection} style={emaiSectionStyle}>
      <div className={styles.emaiSectionChild} />
      <div className={styles.emaiSectionItem} />
      <div className={styles.emailAddress}>Email Address</div>
      <div className={styles.duyphamgmailcom}>duypham@gmail.com</div>
    </div>
  );
};

export default EmaiSection;
