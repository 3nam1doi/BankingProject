import styles from "./QuickLinksSection.module.css";

const QuickLinksSection = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.proofersOfferAWideVarietyParent}>
          <div className={styles.proofersOfferA}>
            Proofers offer a wide variety of tailor-made services to meet your
            individual needs. Proofers offer a number of core services which
            include proofreading and copy-editing (thesis, dissertations, essays
            reports), document formatting and plagiarism
          </div>
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.submitOrdr}>Submit Ordr</div>
            <div className={styles.services}>Services</div>
            <div className={styles.pricing}>Pricing</div>
            <div className={styles.quickLinks}>Quick Links</div>
          </div>
          <div className={styles.subscribeNewsletterParent}>
            <div className={styles.subscribeNewsletter}>
              Subscribe Newsletter
            </div>
            <div className={styles.groupParent}>
              <img className={styles.frameChild} alt="" src="/group-987.svg" />
              <img className={styles.frameItem} alt="" src="/group-988.svg" />
              <img className={styles.frameInner} alt="" src="/group-989.svg" />
              <img className={styles.groupIcon} alt="" src="/group-990.svg" />
            </div>
          </div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.trmsCondition}>{`Trms & Condition`}</div>
        <div className={styles.copyright2024}>{`
Copyright: © 2024 `}</div>
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default QuickLinksSection;
