import './App.css'
import ProjectCard from "./ProjectCard.tsx";
import {useState} from "react";

function App() {

    const [projects, setProjects] = useState<{ id: number; name: string; status: string; priority: 'low' | 'med' | 'high' }[]>([]);
    const [status, setStatus] = useState('Do zrobienia');
    const [priority, setPriority] = useState<'low' | 'med' | 'high'>('low');
    const [name, setName] = useState('');
    const [hasError, setHasError] = useState(false);


    const handleAdd = () => {
        if (!name.trim()) {
            setHasError(true);
            return;
        }
        setHasError(false);

        setProjects([...projects, {
            id: Date.now(),
            name: name.trim(),
            status,
            priority,
        },]);
        setName('');
        setStatus('Do zrobienia');
        setPriority('low');
    };

    const handleDelete = (id: number) => {
        setProjects(projects.filter((p) => p.id !== id));
    };


  return (
    <>
      <div className="Header">
        <h1>Task Manager</h1>
      </div>
        <div className="App">
            <div className="Form">
                <h2>Utwórz projekt</h2>
                <input className={hasError ? 'input-error' : ''}
                    type="text"
                    placeholder="Nazwa projektu"
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

                <button id={"addProjectButton"} onClick={handleAdd}>Dodaj</button>
            </div>
            <div className="List">
                <h2>Lista Projektów</h2>
                <ol>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onDelete={handleDelete}/>
                    ))}
                </ol>
            </div>
        </div>
    </>
  )
}

export default App