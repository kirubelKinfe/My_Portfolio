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

const projects = [
    {
        _id: '1',
        title: "Kitfo Habesha",
        description: "A restaurant website that allows users to order food online with a payment Integration. The website provides an interface for selecting, comparing, and ordering foods.",
        projectLink: "https://kitfo-habesha.vercel.app",
        codeLink: "https://github.com/kirubelKinfe/RestaurantApp.git",
        imgUrl: "/assets/restaurant.png",
        tags: ["Next Js", "Typescript", "Sanity", "Stripe"]

    },
    {
        _id: '2',
        title: "E-Smart",
        description: "An online e-learning-platform that allows users to take courses online. The website also provides an interface for Instructors to create and publish their courses.",
        projectLink: "https://e-esmart.netlify.app",
        codeLink: "https://github.com/kirubelKinfe/E-learning-Platform.git",
        imgUrl: "/assets/e-learning.png",
        tags: ["React Js", "Typescript", "Node Js", "Express Js", "MongoDB"]

    },
]

const Projects = async () => {
    // const projects = await getProjects({ query: "", category: "", page: "1" })

    return (
        <div className="bg-[#f9f9f9] py-16 px-5 sm:px-20 lg:px-32 flex flex-col gap-10" id="projects">
            <div>
                <p className="text-blue-500 font-bold">PORTFOLIO</p>
                <p className="text-xl sm:text-3xl font-bold mb-8">Each project is a unique piece of development 🧩</p>
            </div>
            {projects?.map((project: ProjectType, index) => (
                <Project key={project._id} index={index} project={project} />
            ))}
        </div>
    )
}

export default Projects