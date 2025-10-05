import Image from "next/image";
import { projects } from "../constants";

const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <div className="relative py-16 border-b-[1px] border-gray-300" key={project.id}>
          <div>
            <div className="relative w-full h-[32rem]">
              <Image
                src={project.img}
                alt={project.title}
                className="object-cover"
                fill
              />
            </div>
          </div>

          <div className="mt-10">
            <div>
              <h1 className="text-4xl font-mona font-extrabold">&copy;{project.year}</h1>
              <div className="mt-2 flex gap-3">
                {project.tags.map((tag) => (
                    <span key={tag} className="border uppercase font-medium rounded-2xl px-3 py-1">
                  {tag}
                </span>
                ))}
              </div>
            </div>

            <div className="mt-2">
              <h1 className="text-5xl uppercase font-mona font-extrabold">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
