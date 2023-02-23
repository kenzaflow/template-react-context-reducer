import { useContext } from 'react'
import { TasksContext } from '../Contexts/TasksContext'

export default function useTasks() {
	return useContext(TasksContext)
}
