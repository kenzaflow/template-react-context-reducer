import { PropsWithChildren } from 'react'
import { TasksContext } from './TasksContext'
import { TasksDispatchContext } from './TasksDispatchContext'
import useTasksReducer from '../Hooks/useTasksReducer'

export default function TasksProvider({ children }: PropsWithChildren) {
	const { tasks, dispatch } = useTasksReducer()

	return (
		<TasksContext.Provider value={tasks}>
			<TasksDispatchContext.Provider value={dispatch}>
				{children}
			</TasksDispatchContext.Provider>
		</TasksContext.Provider>
	)
}
