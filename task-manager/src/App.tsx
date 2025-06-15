import './App.css'
import ProjectCard from "./ProjectCard.tsx";
import {useState} from "react";

function App() {

    const [projects, setProjects] = useState<
        {
            id: number;
            name: string;
            status: string;
            priority: 'low' | 'med' | 'high';
            group: string[]
        }[]
    >([]);
    const [status, setStatus] = useState('Do zrobienia');
    const [priority, setPriority] = useState<'low' | 'med' | 'high'>('low');
    const [name, setName] = useState('');
    const [hasError, setHasError] = useState(false);
    const [groupText, setGroupText] = useState('');


    const handleAdd = () => {
        if (!name.trim()) {
            setHasError(true);
            return;
        }

        if (!groupText.trim()) {
            setHasError(true);
            return;
        }
        setHasError(false);

        setProjects([...projects, {
            id: Date.now(),
            name: name.trim(),
            status,
            priority,
            group: groupText.split(',').map((n) => n.trim()).filter(Boolean),
        },]);
        setName('');
        setStatus('Do zrobienia');
        setPriority('low');
        setGroupText('');
    };

    const handleDelete = (id: number) => {
        setProjects(projects.filter((p) => p.id !== id));
    };

    const handleStatusChange = (id: number, newStatus: string) => {
        setProjects(projects.map((p) =>
            p.id === id ? { ...p, status: newStatus } : p
        ));
    };


  return (
    <>
      <div className="Header">
        <h1>Task Manager</h1>
      </div>
        <div className="App">
            <div className="Form">
                <h2>Utwórz Zadanie</h2>
                <input className={hasError ? 'input-error' : ''}
                    type="text"
                    placeholder="Nazwa zadania"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    />

                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>Do zrobienia</option>
                    <option>W trakcie</option>
                    <option>Zakończone</option>
                </select>

                <select value={priority} onChange={(e) => setPriority(e.target.value as 'low' | 'med' | 'high')}>
                    <option value="low">Niski</option>
                    <option value="med">Średni</option>
                    <option value="high">Wysoki</option>
                </select>

                <input className={hasError ? 'input-error' : ''}
                    type="text"
                    placeholder="Uczestnicy (np. Antek, Lukasz)"
                    value={groupText}
                    onChange={(e) => setGroupText(e.target.value)}
                />
                <br></br>
                <button id={"addProjectButton"} onClick={handleAdd}>Dodaj</button>
            </div>
            <div className="List">
                <h2>Lista Zadań</h2>
                <ol>
                    {projects
                        .sort((a, b) => {
                            const priorityOrder = { high: 0, med: 1, low: 2 };
                            return priorityOrder[a.priority] - priorityOrder[b.priority];
                        })
                        .map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onDelete={handleDelete}
                                onStatusChange={handleStatusChange}
                            />
                        ))}
                </ol>
            </div>
        </div>
    </>
  )
}

export default App