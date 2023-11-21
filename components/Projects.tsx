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

export const revalidate = 900;



const Projects = async () => {
    const projects = await getProjects({ query: "", category: "", page: "1" })

    return (
        <div className="bg-[#f9f9f9] py-16 px-5 sm:px-20 lg:px-32 flex flex-col gap-10" id="projects">
            <div>
                <p className="text-blue-500 font-bold">PORTFOLIO</p>
                <p className="text-xl sm:text-3xl font-bold mb-8">Each project is a unique piece of development 🇪🇹</p>
            </div>
            {projects?.map((project: ProjectType, index: number) => (
                <Project key={project._id} index={index} project={project} />
            ))}
        </div>
    )
}

export default Projects