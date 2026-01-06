const Skkills = ({ mySkillRef }) => {
  const skillsData = [
    {
      icon: "fa-brands fa-react",
      title: "Frontend Development",
      description:
        "React.js, Next.js, JavaScript (ES6+), TypeScript, and modern component-based architecture for scalable web applications.",
    },
    {
      icon: "fa-solid fa-paintbrush",
      title: "UI & Styling",
      description:
        "Tailwind CSS, CSS3, responsive layouts, design systems, pixel-perfect UI implementation, and accessibility best practices.",
    },
    {
      icon: "fa-solid fa-database",
      title: "State Management & APIs",
      description:
        "React Query, Redux Toolkit, REST & GraphQL APIs, efficient caching, pagination, and error handling.",
    },
    {
      icon: "fa-solid fa-gauge-high",
      title: "Performance & Optimization",
      description:
        "Improving Core Web Vitals, code splitting, lazy loading, memoization, and rendering optimization for high-performance apps.",
    },
    {
      icon: "fa-solid fa-table",
      title: "Complex UI & Data Handling",
      description:
        "Building data tables, infinite scrolling, filters, search, role-based views, and large-scale enterprise dashboards.",
    },
    {
      icon: "fa-solid fa-people-group",
      title: "Professional & Soft Skills",
      description:
        "Strong communication, teamwork, problem-solving, and collaboration with cross-functional teams in agile environments.",
    },
  ];

  return (
    <section
      ref={mySkillRef}
      className="my-skill-area-style-two plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15 mt--10"
      id="resume"
    >
      <div className="tpm-custom-box-bg position-relative overflow-hidden border--radious-20 custom-margin-lg">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-lg-12 col-md-12">
              <div className="my-skill-area-left-content-wrap">
                <div className="section-head text-align-left">
                  <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1 ">
                    <span className="subtitle theme-gradient">Skill Set</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2 ">
                    Technical Skills & Expertise
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3 ">
                    Specialized in frontend web development with strong
                    expertise in React.js and Next.js. I build scalable,
                    high-performance, and maintainable web applications using
                    modern JavaScript, component-driven architecture, and clean
                    coding practices.
                  </p>
                  <br />
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    My skill set includes responsive UI development, efficient
                    state management, API integration, and performance
                    optimization. I focus on delivering accessible,
                    user-friendly interfaces while collaborating closely with
                    design and backend teams to turn complex requirements into
                    reliable frontend solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xxl-12 col-lg-12 col-md-12">
              <div className="my-skill-card-style-two row">
                {skillsData.map((skill, index) => (
                  <div
                    className="col-lg-6 col-md-6 col-12 paralax-image"
                    key={index}
                  >
                    <div
                      className={`my-skill-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                        index + 1
                      }`}
                    >
                      <div className="card-icon">
                        {typeof skill.icon === "string" ? (
                          <i className={`fa-solid ${skill.icon}`}></i>
                        ) : (
                          <img src={skill.icon} alt={skill.title} />
                        )}
                      </div>
                      <h3 className="card-title">{skill.title}</h3>
                      <p className="card-para">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="tmp-light light-top-left active"></div>
      </div>
    </section>
  );
};
export default Skkills;
