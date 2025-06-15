import './App.css'
import ProjectCard from "./ProjectCard.tsx";
import {useState} from "react";

function App() {

    const [projects, setProjects] = useState<{ id: number; name: string }[]>([]);
    const [input, setInput] = useState('');


    const handleAdd = () => {
        setProjects([...projects, { id: Date.now(), name: input.trim() }]);
        setInput('');
    };


  return (
    <>
      <div className="Header">
        <h1>Task Manager</h1>
      </div>
        <div className="App">
            <div className="Form">
                <h2>Utwórz projekt</h2>
                <input
                    type="text"
                    placeholder="Nazwa projektu"
                    value={input}
                    onChange={(e) => {setInput(e.target.value)}}
                    />
                <button onClick={handleAdd}>Dodaj</button>
            </div>
            <div className="List">
                <h2>Lista Projektów</h2>
                <ol>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </ol>
            </div>
        </div>
    </>
  )
}

export default App