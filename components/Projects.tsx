import { getProjects } from "@sanity/actions"
import Project from "./Project"

export type ProjectType = {
    _id: string
    title: string,
    description: string,
    projectLink: string,
    codeLink: string,
    imgUrl: string,
    tags: Array<string>
}

const Projects = async () => {
    const projects = await getProjects({ query: "", category: "", page: "1" })

    return (
        <div className="bg-[#f9f9f9] pt-16 px-32 flex flex-col gap-5" id="projects">
            <p className="text-blue-500 font-bold">PORTFOLIO</p>
            <p className="text-3xl font-bold mb-8">Each project is a unique piece of development 🧩</p>
            {projects?.map((project: ProjectType) => (
                <Project key={project._id} project={project} />
            ))}
        </div>
    )
}

export default Projects