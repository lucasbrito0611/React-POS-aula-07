import type { ReactNode } from "react";

export interface TarefaProps {
    id: number,
    titulo: string;
    concluido?: boolean;
}

export interface Todo {
    id: number
    todo: string
    completed: boolean
    userId: number
}

export interface TarefasProps {
    dados: Todo[];
}

export interface ModalTarefaProps {
    addTarefa: (titulo: string) => void;
}

export interface TaskFormProps {
  title: string;
  children?: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  buttonText: string;
}