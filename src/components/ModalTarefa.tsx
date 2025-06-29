import { useState } from "react";
import { useRouter } from "next/navigation";

import { IoCloseOutline } from "react-icons/io5";
import { ModalTarefaProps } from "@/types/tarefa";

const ModalTarefa = ({ addTarefa }: ModalTarefaProps) => {
    const [titulo, setTitulo] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTarefa(titulo);
        setTitulo('');
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-1000 opacity-100">
            <div className="relative flex flex-col gap-8 w-[30em] h-auto bg-white rounded-[20px] shadow-[0_0_50px_#000] p-10 text-gray-800">
                <a href="/tarefas" className="absolute top-4 right-4 cursor-pointer">
                    <IoCloseOutline size={35}/>    
                </a> 
                <h2 className="font-bold text-center text-2xl">Nova tarefa</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="titulo" className="font-bold text-base">Título:</label>
                        <input 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Digite o título da tarefa"
                        className="border-gray-800 border-2 rounded-[5px] pl-3 py-1 outline-none"/>
                    </div>
                    <button className="cursor-pointer bg-gray-800 text-white font-medium py-2 px-4 rounded-[5px]">
                        Adicionar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ModalTarefa;