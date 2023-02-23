import { useReducer } from 'react'
import uuidv4 from '../../../utils/uuid'
import tasksReducer from '../Controllers/tasksReducer'

const initialTasks = [
	{
		id: uuidv4(),
		text: 'Cien años de soledad, de Gabriel García Márquez',
		done: true,
	},
	{
		id: uuidv4(),
		text: 'El señor de los anillos (Trilogía), de J. R. R. Tolkien',
		done: false,
	},
	{ id: uuidv4(), text: '1984, de George Orwell', done: false },
]

export default function useTasksReducer() {
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

	return { tasks, dispatch }
}
