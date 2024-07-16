import React from "react"
import ProjectCard from "../project-card/ProjectCard"

const projects = [
  {
    title: "Project Title",
    mainImg: "assets/dummy-project-img.jpg",
    images: [
      "assets/dummy-project-img.jpg",
      "assets/project-image-1.jpg",
      "assets/project-image-2.jpg",
      "assets/project-image-3.jpg",
      "assets/project-image-4.jpg",
    ],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto ipsum iusto exercitationem cumque excepturi repellat veniam aliquam, quisquam ullam vel praesentium ex. Labore, quas eaque. Repudiandae recusandae veniam perspiciatis!",
  },
]

export default function ProjectsSection() {
  return (
    <div id="projects" className="bg-orange-200">
      <div className="container">
        <div className="py-16 space-y-8">
          <div>
            <span className="tracking-widest text-sm">OUR PROJECTS</span>
          </div>

          <div>
            <p className="mx-auto w-[min(600px,100%)] font-semibold text-center xl:text-xl text-lg">
              Explore our latest projects, showcasing our dedication to quality and innovation. Each project highlights
              our commitment to excellence and client satisfaction.
            </p>
          </div>

          <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
            {Array.from({ length: 9 }, (_, idx) => (
              <ProjectCard key={idx} project={projects[0]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
