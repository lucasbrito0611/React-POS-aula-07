import Tarefa from "@/components/Tarefa";
import { TarefasProps } from "@/types/tarefa";

const Tarefas = ({ dados }: TarefasProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dados.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    id={tarefa.id}
                    titulo={tarefa.todo}
                    concluido={tarefa.completed}
                />
            ))}
        </div>
    );
};

export default Tarefas;