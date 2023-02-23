import { useContext } from 'react'
import { TasksDispatchContext } from '../Contexts/TasksDispatchContext'

export default function useTasksDispatch() {
	return useContext(TasksDispatchContext)
}
