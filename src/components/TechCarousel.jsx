import React from "react";

const EXTRA_TECH = [
  { name: "Vue 3", file: "vue.svg" },
  { name: "Express.js", file: "express.svg" },
  { name: "Redux", file: "redux.svg" },
  { name: "Axios", file: "axios.svg" },
  { name: "Vite", file: "vite.svg" },
  { name: "JWT", file: "jwt.svg" },
  { name: "Postman", file: "postman.svg" },
  { name: "Railway", file: "railway.svg" },
  { name: "Render", file: "render.svg" },
  { name: "Netlify", file: "netlify.svg" },
  { name: "Hostinger", file: "hostinger.svg" },
  { name: "Cloudinary", file: "cloudinary.svg" },
  { name: "Tailwind CSS", file: "tailwind.svg" },
];

const TechCarousel = () => {
  const loop = [...EXTRA_TECH, ...EXTRA_TECH];

  return (
    <div
      className="tech-marquee"
      aria-label="Otras tecnologías"
    >
      <div className="tech-track">
        {loop.map((tech, i) => (
          <div
            className="tech-item"
            key={`${tech.file}-${i}`}
            tabIndex={0}
          >
            <img
              src={`/tech/${tech.file}`}
              alt={tech.name}
              width={48}
              height={48}
            />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;