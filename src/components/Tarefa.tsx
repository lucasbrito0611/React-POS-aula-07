import { useState } from "react";
import { useRouter } from "next/navigation";

import { TarefaProps } from "@/types/tarefa";

const Tarefa = ({ id, titulo, concluido }: TarefaProps) => {
    const router = useRouter();
    const [estaConcluido, setEstaConcluido] = useState(concluido);

    const classeCard = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
        estaConcluido
            ? "bg-gray-800 hover:border-gray-800"
            : "bg-gray-400 hover:border-gray-400"
    }`;

    const classeCorDoTexto = estaConcluido ? "text-amber-50" : "";

    const escutarClique = () => {
        setEstaConcluido(!estaConcluido);
    };

    const editClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        router.push(`/tarefas/${id}`)
    };

    return (
        <div className={classeCard} onClick={() => escutarClique()}>
            <h3 className={`text-xl font-bold ${classeCorDoTexto}`}>{titulo}</h3>
            <p className={`text-sm ${classeCorDoTexto}`}>
                {estaConcluido ? "Concluída" : "Pendente"}
            </p>
            <div className="mt-3">
                <button className="bg-blue-600 text-white px-2 py-1 rounded-sm cursor-pointer" onClick={editClick}>
                    Editar
                </button>
            </div>
        </div>
    );
};

export default Tarefa;