"use client";

import type React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Cabecalho from "@/components/Cabecalho";
import ModalTarefa from "@/components/ModalTarefa";
import { Todo } from "@/types/tarefa";


const NovaTarefa = () => {
    const router = useRouter();
    const [tarefas, setTarefas] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/todos')
                setTarefas(response.data.todos)
            } catch (err) {
                console.error(err)
            } 
        }

        fetchTodos()
    }, [])

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

    return (
        <div className="flex flex-col gap-8 container mx-auto p-4">
            <Cabecalho />
            <ModalTarefa addTarefa={adicionarTarefa} />
        </div>
    );
};

export default NovaTarefa;