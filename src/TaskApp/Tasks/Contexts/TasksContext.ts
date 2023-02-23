import { createContext } from "react";
import { TypeTask } from "../Interfaces/tasks";

export const TasksContext = createContext<TypeTask[]>(null!)