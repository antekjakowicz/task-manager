
export interface ProjectCardInterface {
    project: {
        id: number;
        name: string;
        status: string;
        priority: 'low' | 'med' | 'high';
        group: string[];
    };
    onDelete: (id: number) => void;
    onStatusChange: (id: number, newStatus: string) => void;
}

function ProjectCard({project, onDelete, onStatusChange}: ProjectCardInterface) {

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

    const getStatusColor = () => {
        switch (project.status) {
            case 'Do zrobienia':
                return '#ff4d4f';
            case 'W trakcie':
                return '#1890ff';
            case 'Zakończone':
                return '#52c41a';
        }
    }

    return (
        <div className="ProjectCard" style={{ borderLeft: `6px solid ${getPriorityColor()}` }}>
            <p><strong>{project.name}</strong></p>

            <div className="statusDiv">
                <select
                    value={project.status}
                    onChange={(e) => onStatusChange(project.id, e.target.value)}
                    style={{
                        backgroundColor: getStatusColor(),
                        color: '#fff',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '4px',
                        border: 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}
                >
                    <option>Do zrobienia</option>
                    <option>W trakcie</option>
                    <option>Zakończone</option>
                </select>
            </div>

            <div>
                <p>Uczestnicy:</p>
                <ul>
                    {project.group.map((person, index) => (
                        <li key={index}>{person.trim()}</li>
                    ))}
                </ul>
            </div>

            <button id={"deleteButton"} onClick={() => onDelete(project.id)}>Usuń</button>
        </div>
    );
}

export default ProjectCard;