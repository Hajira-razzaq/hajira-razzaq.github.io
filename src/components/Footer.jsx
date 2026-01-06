const Footer = () => {
  return (
    <div className="tmp-footer-area footer-style-4 tmp-section-gapTop pb--50">
      <div className="plr--150 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15">
        <div className="row margin-lg-only">
          <div className="col-lg-12">
            <div className="for-animation-inner">
              <div className="footer-area text-center">
                <h3 className="footer-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Let's Get in Touch!
                </h3>
                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-2">
                  Let’s connect! Reach out to discuss projects or programming
                  ideas via the platforms above or email me at{" "}
                  <a href="mailto:hajira0037@gmail.com">hajira0037@gmail.com</a>
                  .
                </p>

                <p className="description mt--30">
                  © {new Date().getFullYear()}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
