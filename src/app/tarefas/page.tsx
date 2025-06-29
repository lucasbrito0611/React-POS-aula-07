"use client";

import type React from "react";
import axios from 'axios'


import { useEffect, useState } from "react";
import { Todo } from "@/types/tarefa";
import Cabecalho from "@/components/Cabecalho";
import Tarefas from "@/components/Tarefas";
import ModalTarefa from "@/components/ModalTarefa";

const Home = () => {
    const [tarefas, setTarefas] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/todos')
                setTarefas(response.data.todos)
            } catch (err) {
                setError('Failed to fetch todos')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchTodos()
    }, [])

    if (loading) {
        return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        )
    }

    if (error) {
        return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-red-500 text-xl">{error}</div>
        </div>
        )
    }

    return (
        <div className="flex flex-col gap-8 container mx-auto p-4">
            <Cabecalho />
            <Tarefas dados={tarefas} />
        </div>
    );
};

export default Home;