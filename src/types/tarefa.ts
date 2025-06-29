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