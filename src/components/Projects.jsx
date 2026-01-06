import Beneple_Hero from "../assets/Beneple_Hero.webp";
import Blogsec1 from "../assets/blogsec1.webp";
import Geekshub_Hero from "../assets/Geekshub_Hero.webp";
import Btg from "../assets/btg-bg.svg";
import Btg2 from "../assets/btg-bg-2.svg";
const Projects = ({ myProjectsRef }) => {
  const projectsData = [
    {
      title: "The Smart Way to Manage Your Teams",
      tags: ["React", "Role-Based Access", "Enterprise"],
      image: Beneple_Hero,
      url: "https://www.beneple.com/hr-platform-new",
      description:
        "Beneple automates HR, so you can focus on your team and boost efficiency.",
    },
    {
      title: "React Native Apps & Headless CMS Platforms (Confidential)",
      tags: [
        "React Native",
        "Strapi",
        "CRM Systems",
        "Funnels",
        "API Integration",
      ],
      image: Blogsec1,
      description:
        "Worked on multiple production-grade React Native applications along with Strapi-powered admin dashboards. Built CRM features, funnel-based user flows, and internal management tools. Emphasized scalable architecture, clean component design, efficient API integration, and performance optimization while collaborating with cross-functional teams.",
    },
    {
      title: "Internal Tools & Digital Platforms (Confidential)",
      tags: ["React", "Firebase", "Admin Dashboards", "API Integration"],
      image: Geekshub_Hero, // use neutral / abstract image
      url: "https://www.geekshub.io/",
      description:
        "Worked on multiple internal tools and client platforms at Geekshub, including React and React Native applications, admin dashboards, and CMS-driven systems. Utilized Firebase services for real-time data handling and authentication, Strapi for content and workflow management, and built CRM features, funnels, and automation flows. Focused on scalable architecture, reusable components, and performance-optimized user experiences across web and mobile.",
    },
  ];

  return (
    <section
      ref={myProjectsRef}
      className="latest-portfolio-area custom-column-grid tmp-section-gap"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1    ">
            <span className="subtitle theme-gradient">Latest Projects</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2    ">
            Transforming Ideas into Exceptional
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3    ">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>
        <div className="latest-portfolio-tabs-area">
          <div className="tab-content bg-blur-style-one" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-all"
              role="tabpanel"
              aria-labelledby="nav-all-tab"
              tabindex="0"
            >
              <div className="row animation-action-3">
                {projectsData.map((project, index) => (
                  <div
                    key={index}
                    className={`paralax-image ${
                      index === 0 ? "col-lg-12 col-md-12 " : "col-lg-6 col-md-6"
                    }`}
                  >
                    <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-2    ">
                      <div className="portfoli-card-img">
                        <div
                          style={{
                            backgroundColor: "#f5f5f5",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "3rem",
                          }}
                          className="img-box v2"
                        >
                          <a
                            className="tmp-scroll-trigger tmp-zoom-in animation-order-1    "
                            href=""
                          >
                            <img
                              className={`w-100 project-img ${
                                project?.isCustomStyle
                                  ? "project-img--custom"
                                  : ""
                              }`}
                              src={project?.image}
                              alt="Thumbnail"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <h3 className="content-left portfolio-card-title content-left">
                            <a>{project?.title}</a>
                          </h3>
                          <div className="tag-items">
                            <ul>
                              {project?.tags.map((tag, index) => (
                                <li key={index}>
                                  <a aria-label={tag} className="tag-item ">
                                    {tag}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <p className="description content-left">
                          {project?.description}
                        </p>

                        <div className="store-buttons">
                          {project?.url && (
                            <a
                              onClick={() => window.open(project.url)}
                              className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
                            >
                              <div className="icon-reverse-wrapper">
                                <span className="btn-text">Website</span>
                                <div className="btn-hack"></div>
                                <img src={Btg} alt="" className="btn-bg" />
                                <img
                                  src={Btg2}
                                  alt=""
                                  className="btn-bg-hover"
                                />
                                <span className="btn-icon">
                                  <i className="fa-solid fa-globe"></i>
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-solid fa-globe"></i>
                                </span>
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="tmp-light light-center"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
