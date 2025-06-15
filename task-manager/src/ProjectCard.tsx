
export interface ProjectCardInterface {
    project: {
        id: number;
        name: string;
    };
}

function ProjectCard({project}: ProjectCardInterface) {
    return (
        <div className="ProjectCard">
            <li>{project.name}</li>
        </div>
    );
}

export default ProjectCard;