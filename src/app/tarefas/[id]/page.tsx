'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import TaskForm from "@/components/TaskForm";
const EditTarefa = ({ params }: { params: { id: string } }) => {
    const [titulo, setTitulo] = useState("");
    const [completed, setCompleted] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchTarefa = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/todos/${params.id}`);
                setTitulo(response.data.todo);
                setCompleted(response.data.completed);
            } catch (error) {
                console.error("Erro ao carregar tarefa:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTarefa();
    }, [params.id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`https://dummyjson.com/todos/${params.id}`, {
                todo: titulo,
                completed: completed
            });
            alert("Tarefa atualizada com sucesso!");
            router.push("/tarefas");
        } catch (error) {
            console.error("Erro ao atualizar tarefa:", error);
            alert("Erro ao atualizar tarefa.");
        }
    };

    if (loading) return <p className="text-center mt-10">Carregando tarefa...</p>;

    return (
        <TaskForm title={`Edição da tarefa #${params.id}`} onSubmit={handleSubmit} buttonText="Atualizar">
            <div className="flex flex-col gap-2">
                <label htmlFor="titulo" className="font-bold">Título:</label>
                <input id="titulo" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="border border-gray-800 rounded-sm pl-2 py-1 text-sm"/>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="completed" checked={completed} onChange={() => setCompleted(!completed)} className="cursor-pointer w-4 h-4"/>
                <label htmlFor="completed" className="text-sm font-medium cursor-pointer">
                    Concluída
                </label>
            </div>
        </TaskForm>
    );
};

export default EditTarefa;
