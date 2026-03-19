import React from "react";

function ServicesList() {
  const services = [
    {
      icon: <i className="fas fa-code"></i>,
      title: "Frontend Development",
      description:
        "I build responsive, dynamic web applications using React and modern JavaScript, focusing on clean code and interactive user experiences.",
    },
    {
      icon: <i className="fas fa-palette"></i>,
      title: "UI/UX Implementation",
      description:
        "I translate design concepts into pixel-perfect, functional reality. I ensure the final interface is intuitive, accessible, and visually engaging.",
    },
    {
      icon: <i className="fas fa-rocket"></i>,
      title: "Performance & Optimization",
      description:
        "I optimize web performance for speed and SEO, ensuring your site loads fast and ranks well, providing a seamless experience for users.",
    },
  ];

  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ServicesList;
