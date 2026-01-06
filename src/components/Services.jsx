const Services = ({ myServicesRef }) => {
  const servicesData = [
    {
      icon: "fa-brands fa-react",
      title: "React & Next.js Development",
      description:
        "Building scalable, high-performance web applications using React.js and Next.js with modern patterns, reusable components, and clean architecture.",
    },
    {
      icon: "fa-solid fa-palette",
      title: "UI Development & Design Systems",
      description:
        "Pixel-perfect UI implementation using Tailwind CSS, Shadcn UI, and custom design systems with strong focus on consistency, accessibility, and responsiveness.",
    },
    {
      icon: "fa-solid fa-gauge-high",
      title: "Web Performance Optimization",
      description:
        "Optimizing Core Web Vitals, reducing bundle size, lazy loading, memoization, and improving rendering performance for fast and smooth user experiences.",
    },
    {
      icon: "fa-solid fa-database",
      title: "API Integration & State Management",
      description:
        "Expertise in REST & GraphQL APIs with React Query, Redux Toolkit, and efficient data caching, pagination, and error handling.",
    },
    {
      icon: "fa-solid fa-scroll",
      title: "Forms & Validation",
      description:
        "Advanced form handling using React Hook Form and Zod with dynamic fields, conditional validation, accessibility, and clean UX patterns.",
    },
    {
      icon: "fa-solid fa-infinity",
      title: "Infinite Scroll & Complex Tables",
      description:
        "Building large-scale data tables with infinite scrolling, filters, search, pagination, and Intersection Observer for seamless UX.",
    },
    {
      icon: "fa-solid fa-file-pdf",
      title: "PDF & Report Generation",
      description:
        "Generating dynamic PDFs and reports using React-to-PDF and custom layouts for payslips, invoices, and downloadable documents.",
    },
    {
      icon: "fa-solid fa-users",
      title: "Role-Based UI & Dashboards",
      description:
        "Developing dashboards with role-based access, conditional rendering, and complex workflows for enterprise-grade applications.",
    },
    {
      icon: "fa-solid fa-universal-access",
      title: "Accessibility & UX Improvements",
      description:
        "Ensuring WCAG-compliant accessibility, semantic HTML, keyboard navigation, and screen-reader-friendly interfaces.",
    },
  ];

  return (
    <div
      ref={myServicesRef}
      className="tmp-service-area tmp-section-gapBottom"
      id="service"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head mb--50">
              <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle theme-gradient">Worked On</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                Technologies & Services I Work With
              </h2>
            </div>
          </div>
        </div>
        <div className="about-us-section-card row g-5 animation-action-2">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image"
            >
              <div className="about-us-card tmp-scroll-trigger tmponhover single-animation tmp-fade-in">
                <div className="card-head">
                  <div className="logo-img">
                    <i class={service.icon}></i>
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                </div>
                <p className="card-para">{service.description}</p>
                <div className="tmp-light light-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
