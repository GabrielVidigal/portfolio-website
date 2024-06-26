"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website com React/nextJs",
    description: "Projeto do meu portfolio website para me aprensentar e aprentar meus projetos feito em next.js ",
    image: "/images/projects/website-portfolio.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GabrielVidigal/portfolio-website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Netflix clone com react",
    description: "Clone da pagina inicial da netflix com react e consumindo API de filmes",
    image: "/images/projects/netflix.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GabrielVidigal/netflix-clone",
    previewUrl: "https://netflix-clone-tau-flame.vercel.app/",
  },
  {
    id: 3,
    title: "Website faculdade com react",
    description: "Este projeto é um website responsivo desenvolvido em React para uma faculdade fictícia, incorpora hooks como useState e useRef alem de envio de formulários para email",
    image: "/images/projects/website-college.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GabrielVidigal/website-college",
    previewUrl: "https://website-college-two.vercel.app/",
  },
  {
    id: 4,
    title: "Sistema de chamados com React e Firebase",
    description: "Aplicação de sistema de chamados utilizando react e firebase ",
    image: "/images/projects/chamados2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GabrielVidigal/sistema-de-chamados-reactJS",
    previewUrl: "https://sistemachamadosreact.netlify.app/",
  },
  {
    id: 5,
    title: "website to-do-list com react",
    description: "Aplicação de uma to-do-list com react ",
    image: "/images/projects/tarefas2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GabrielVidigal/to-do-list-react",
    previewUrl: "https://reactarefas.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image} 
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
