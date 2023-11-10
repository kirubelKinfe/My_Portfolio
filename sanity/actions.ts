import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetProjectsParams {
    query: string,
    category: string,
    page: string
}

export const getProjects =  async (params: GetProjectsParams) => {
    const { query, category, page } = params
    
    try {
        const projects = await readClient.fetch(
          groq`${buildQuery({
            type: 'projects',
            query,
            category,
            page: parseInt(page),
          })}{
            title,
            _id,
            "imgUrl": imgUrl.asset->url,
            description,
            projectLink,
            codeLink,
            tags
          }`
        );
    
        return projects;
      } catch (error) {
        console.log(error);
      }
} 