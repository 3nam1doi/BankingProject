import "./QuickLinksSection.css";

const QuickLinksSection = () => {
  return (
    <div className="frame-parent">
      <div className="frame-group">
        <div className="proofers-offer-a-wide-variety-parent">
          <div className="proofers-offer-a">
            Proofers offer a wide variety of tailor-made services to meet your
            individual needs. Proofers offer a number of core services which
            include proofreading and copy-editing (thesis, dissertations, essays
            reports), document formatting and plagiarism
          </div>
          <div className="home-parent">
            <div className="home">Home</div>
            <div className="submit-ordr">Submit Ordr</div>
            <div className="services">Services</div>
            <div className="pricing">Pricing</div>
            <div className="quick-links">Quick Links</div>
          </div>
          <div className="subscribe-newsletter-parent">
            <div className="subscribe-newsletter">Subscribe Newsletter</div>
            <div className="group-parent">
              <img className="frame-child" alt="" src="/group-987.svg" />
              <img className="frame-item" alt="" src="/group-988.svg" />
              <img className="frame-inner" alt="" src="/group-989.svg" />
              <img className="group-icon" alt="" src="/group-990.svg" />
            </div>
          </div>
        </div>
        <div className="line-div" />
        <div className="privacy-policy1">Privacy Policy</div>
        <div className="trms-condition">{`Trms & Condition`}</div>
        <div className="copyright-2024">{`
Copyright: © 2024 `}</div>
      </div>
      <div className="line" />
    </div>
  );
};

export default QuickLinksSection;
