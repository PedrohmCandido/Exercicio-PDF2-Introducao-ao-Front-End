import { useState, useEffect } from "react";
import ThemeSelector from "./ThemeSelector.jsx";

export default function Cadastro() {
  const [tarefas, setTarefas] = useState([
    "Clonar cartão",
    "Trocar óleo da Kombi",
    "Repor estoque de nhoque recheado",
  ]);

  const [input, setInput] = useState("");

  const localTasks = localStorage.getItem('@tarefas')
  const localName = localStorage.getItem('@nome')

  useEffect(() => {
    let name = prompt('Informe o seu nome')
    localStorage.setItem('@nome', name)
  }, [])

  useEffect(() => {
    if(localTasks){
        setTarefas(JSON.parse(localTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@tarefas', JSON.stringify(tarefas));
  }, [tarefas])

  function handleRegistro(e) {
    e.preventDefault();

    setTarefas((prevTasks) => {
      return [...prevTasks, input];
    });
  }

  function handleRemove(taskName) {
    setTarefas((prevTasks) => {
        return prevTasks.filter((tarefa) => tarefa !== taskName)
    })
  }



  return (
    <>
      <div>
        <h1>{localName}, sua lista de tarefas!</h1>
        <form onSubmit={handleRegistro}>
          <div>
            <label htmlFor="">Nome da Tarefa:</label>
            <input
              type="text"
              placeholder="Digite uma tarefa!"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button type="submit"> Registro </button>
        </form>
        <div>
          <ul>
            {tarefas.map((tarefa) => (
              <li key={tarefa}>{tarefa} <button onClick={() => handleRemove(tarefa)}>remover</button></li>
            ))}
          </ul>
        </div>
        <ThemeSelector />
      </div>
    </>
  );
}
