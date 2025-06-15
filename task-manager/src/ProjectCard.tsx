
export interface ProjectCardInterface {
    project: {
        id: number;
        name: string;
        status: string;
        priority: 'low' | 'med' | 'high';
    };
    onDelete: (id: number) => void;
}

function ProjectCard({project, onDelete}: ProjectCardInterface) {

    const getPriorityColor = () => {
        switch (project.priority) {
            case 'high':
                return '#ff4d4f';
            case 'med':
                return '#faad14';
            case 'low':
                return '#52c41a';
        }
    }

    return (
        <div className="ProjectCard" style={{ borderLeft: `6px solid ${getPriorityColor()}` }}>
            <p><strong>{project.name}</strong></p>
            <p>Status: {project.status}</p>
            <button id={"deleteButton"} onClick={() => onDelete(project.id)}>Usuń</button>
        </div>
    );
}

export default ProjectCard;