'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

const EditTarefa = ({ params }: { params: { id: string } }) => {
    const [titulo, setTitulo] = useState("");
    const [completed, setCompleted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [salvando, setSalvando] = useState(false);
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
        setSalvando(true);
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
        } finally {
            setSalvando(false);
        }
    };

    if (loading) return <p className="text-center mt-10">Carregando tarefa...</p>;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-1000 opacity-100">
            <div className="relative flex flex-col gap-8 w-[30em] h-auto bg-white rounded-[20px] shadow-[0_0_50px_#000] p-10 text-gray-800">
                <a href="/tarefas" className="absolute top-4 right-4 cursor-pointer">
                    <IoCloseOutline size={35}/>    
                </a> 
                <h2 className="font-bold text-center text-2xl">Edição da tarefa #{params.id}</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="titulo" className="font-bold">Título:</label>
                            <input
                                id="titulo"
                                type="text"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                className="border border-gray-800 rounded-sm pl-2 py-1 text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="completed"
                                checked={completed}
                                onChange={() => setCompleted(!completed)}
                                className="cursor-pointer w-4 h-4"
                            />
                            <label htmlFor="completed" className="text-sm font-medium cursor-pointer">
                                Concluída
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={salvando}
                        className="w-full bg-gray-800 text-white font-medium py-2 px-4 rounded-[5px] mt-4 hover:bg-gray-700 disabled:opacity-60 cursor-pointer"
                    >
                        {salvando ? "Salvando..." : "Atualizar"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditTarefa;
