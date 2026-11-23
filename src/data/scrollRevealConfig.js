export const defaultProps = {
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  distance: "22px",
  duration: 650,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 100,
      distance: "14px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-eyebrow-wrap",
    animation: {
      delay: 80,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: 160,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero-meta",
    animation: {
      delay: 240,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: 320,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 150,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 240,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 140,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: 220,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 160,
      origin: "bottom",
    },
  },
  {
    element: ".cv-reveal",
    animation: {
      delay: 140,
      origin: "bottom",
    },
  },
];
