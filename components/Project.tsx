import Image from "next/image"
import { ProjectType } from "./Projects"
import { Github, Maximize, Maximize2, ExpandIcon } from "lucide-react"
import Link from "next/link"

type ProjectProps = {
    project: ProjectType
}
const Project = ({ project }: ProjectProps) => {
    return (
        <div className="grid w-full grid-cols-1 sm:grid-cols-7 justify-center items-center gap-5 mb-40 p-5 rounded-lg shadow-md bg-white">
            <div className="col-span-4 flex shadow-sm rounded-lg shadow-gray-300 items-center justify-center">
                <Image
                    src={project.imgUrl}
                    className="w-full h-[300px] lg:w-full lg:h-[340px] rounded-lg object-contain"
                    width={420}
                    height={300}
                    alt="restaurant"
                />
            </div>
            <div className="col-span-3 py-5 px-8 flex flex-col gap-5 items-center">
                <p className="font-bold text-2xl text-[#130849]">{project.title}</p>
                <p className="text-gray-600 font-poppins text-xl text-center">{project.description}</p>
                <div className="flex items-center gap-2">
                    {project.tags?.map((tag) => (
                        <p key={tag} className="p-2 shadow-md font-bold capitalize text-gray-700">{tag}</p>
                    ))}
                </div>
                <div className="w-full flex items-center justify-between px-14">
                    <Link href={''} className="flex items-center group gap-2">
                        <p className="text-lg text-gray-800  group-hover:text-blue-500">Code</p>
                        <Github className="text-base text-gray-700  group-hover:text-blue-500" />
                    </Link>
                    <Link href={''} className="flex items-center group gap-2">
                        <p className="text-lg text-gray-800 group-hover:text-blue-500">Live</p>
                        <ExpandIcon className="text-base text-gray-700  group-hover:text-blue-500" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project