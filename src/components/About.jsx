const About = ({ myAboutRef }) => {
  return (
    <section
      ref={myAboutRef}
      className="about-us-area tmp-section-gapBottom"
      id="about"
    >
      <div className="container">
        <section className="about-us-area">
          <div className="container">
            <div className="row align-items-center animation-action-3">
              <div className="col-lg-12">
                <div className="about-us-right-content-wrap">
                  <div className="section-head text-align-left mb--50">
                    <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span className="subtitle theme-gradient">About Me</span>
                    </div>
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                      Crafting Scalable & High-Impact <br />
                      Frontend Experiences
                    </h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      Results-driven Frontend Developer specializing in React.js
                      and Next.js, with strong expertise in building scalable,
                      high-performance, and user-centric web applications. I
                      focus on clean architecture, reusable components, and
                      modern UI patterns to deliver responsive and accessible
                      digital experiences.
                    </p>

                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      I have hands-on experience working on enterprise-level
                      dashboards, role-based systems, complex data tables,
                      infinite scrolling, and real-time interfaces. I actively
                      optimize web performance, improve Core Web Vitals, and
                      implement robust state management using React Query and
                      Redux Toolkit.
                    </p>

                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      I collaborate closely with designers, backend teams, and
                      product managers to translate business requirements into
                      reliable frontend solutions. Passionate about performance
                      optimization, accessibility, and continuous learning, I
                      stay up to date with modern frontend technologies and best
                      practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default About;
