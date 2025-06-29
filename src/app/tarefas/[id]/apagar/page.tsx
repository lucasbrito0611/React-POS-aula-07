'use client';

import { useRouter } from "next/navigation";
import axios from "axios";

import TaskForm from "@/components/TaskForm";

const ApagarTarefa = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confirmarExclusao();
  };    

  return (
    <TaskForm title={`Deseja apagar a tarefa #${params.id}?`} onSubmit={handleSubmit} buttonText="Apagar"/>
  );
};

export default ApagarTarefa;
