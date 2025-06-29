"use client";

import type React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Cabecalho from "@/components/Cabecalho";
import TaskForm from "@/components/TaskForm";
import { Todo } from "@/types/tarefa";

const NovaTarefa = () => {
    const router = useRouter();
    const [tarefas, setTarefas] = useState<Todo[]>([]);
    const [titulo, setTitulo] = useState("");

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/todos');
                setTarefas(response.data.todos);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTodos();
    }, []);

    const adicionarTarefa = (titulo: string) => {
        if (titulo.trim() === '') {
            alert("Título da tarefa não pode ser vazio.");
            return;
        }
        setTarefas([
            { id: tarefas.length + 1, todo: titulo, completed: false, userId: tarefas.length + 1 },
            ...tarefas
        ]);
        router.push("/tarefas");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        adicionarTarefa(titulo);
        setTitulo("");
    };

    return (
        <div className="flex flex-col gap-8 container mx-auto p-4">
            <Cabecalho />
            <TaskForm title="Nova tarefa" onSubmit={handleSubmit} buttonText="Adicionar">
                <div className="flex flex-col gap-1">
                    <label htmlFor="titulo" className="font-bold text-base">Título:</label>
                    <input
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Digite o título da tarefa"
                        className="border-gray-800 border-2 rounded-[5px] pl-3 py-1 outline-none"
                    />
                </div>
            </TaskForm>
        </div>
    );
};

export default NovaTarefa;