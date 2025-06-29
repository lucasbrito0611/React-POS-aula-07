'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const ApagarTarefa = ({ params }: { params: { id: string } }) => {
    const [titulo, setTitulo] = useState("");
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchTarefa = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/todos/${params.id}`);
                setTitulo(response.data.todo);
            } catch (error) {
                console.error("Erro ao buscar tarefa:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTarefa();
    }, [params.id]);

    const confirmarExclusao = async () => {
        try {
            await axios.delete(`https://dummyjson.com/todos/${params.id}`);
            alert("Tarefa apagada com sucesso!");
            router.push("/tarefas");
        } catch (error) {
            console.error("Erro ao apagar tarefa:", error);
            alert("Erro ao apagar tarefa.");
        }
    };

    if (loading) return <p className="text-center mt-10">Carregando tarefa...</p>;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-1000 opacity-100">
            <div className="relative flex flex-col gap-8 w-[30em] h-auto bg-white rounded-[20px] shadow-[0_0_50px_#000] p-10 text-gray-800">
                <h2 className="text-xl font-bold mb-4">Deseja apagar a tarefa #{params.id}?</h2>
                <p className="mb-6">"{titulo}"</p>
                <div className="flex gap-4">
                    <button
                        onClick={confirmarExclusao}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Apagar
                    </button>
                    <button
                        onClick={() => router.push("/tarefas")}
                        className="bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-500"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ApagarTarefa;
