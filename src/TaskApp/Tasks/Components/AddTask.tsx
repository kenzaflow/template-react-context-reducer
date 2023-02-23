import { useState } from 'react'
import uuidv4 from '../../../utils/uuid'
import useTasksDispatch from '../Hooks/useTasksDispatch'

export default function AddTask() {
	const dispatch = useTasksDispatch()

	function handleAddTask(text: string) {
		dispatch({
			type: 'added',
			id: uuidv4(),
			text: text,
		})
	}

	const [text, setText] = useState('')
	return (
		<>
			<input
				placeholder='Terminar de leer el libro...'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button
				onClick={() => {
					setText('')
					handleAddTask(text)
				}}>
				Agregar
			</button>
		</>
	)
}
