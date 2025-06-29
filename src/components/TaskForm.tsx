import { TaskFormProps } from "@/types/tarefa";

import { IoCloseOutline } from "react-icons/io5";

const TaskForm = ({ title, children, onSubmit, buttonText }: TaskFormProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-1000 opacity-100">
      <div className="relative flex flex-col gap-8 w-[30em] bg-white rounded-[20px] shadow-[0_0_50px_#000] p-10 text-gray-800">
        <a href="/tarefas" className="absolute top-4 right-4 cursor-pointer">
          <IoCloseOutline size={35} />
        </a>
        <h2 className="font-bold text-center text-2xl">{title}</h2>
        <form onSubmit={onSubmit} className="space-y-5">
          {children && children}
          <button type="submit" className="w-full bg-gray-800 text-white font-medium py-2 px-4 rounded-[5px] mt-4 hover:bg-gray-700 disabled:opacity-60 cursor-pointer">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
