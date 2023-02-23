import { createContext, Dispatch } from 'react'
import { TypeActionTask } from '../Interfaces/tasks'

export const TasksDispatchContext = createContext<Dispatch<TypeActionTask>>(
	null!,
)
