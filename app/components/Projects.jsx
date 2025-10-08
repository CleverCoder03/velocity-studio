import Image from "next/image";
import { projects } from "../constants";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <Link href={project.href} key={project.id}>
          <div className="py-16 bg-white border-b-[1px] border-gray-300 lg:flex lg:flex-row-reverse lg:justify-between lg:items-start" >
          <div className="lg:relative lg:h-[50vw]">
            <div className="relative lg:absolute lg:right-0 w-full lg:w-[48vw] h-[32rem] lg:h-[50vw] lg:overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                className="object-cover"
                fill
              />
            </div>
          </div>

          <div className="mt-10 lg:sticky lg:top-20 text-white z-12 mix-blend-difference">
            <div>
              <h1 className="text-4xl lg:text-5xl lg:font-semibold font-mona font-extrabold">&copy;{project.year}</h1>
              <div className="mt-2 flex gap-3">
                {project.tags.map((tag) => (
                    <span key={tag} className="border uppercase font-medium rounded-2xl px-3 py-1">
                  {tag}
                </span>
                ))}
              </div>
            </div>

            <div className="mt-2">
              <h1 className="text-5xl lg:text-[7.5vw] lg:w-[70vw] uppercase font-mona font-extrabold">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </>
  );
};

export default Projects;
