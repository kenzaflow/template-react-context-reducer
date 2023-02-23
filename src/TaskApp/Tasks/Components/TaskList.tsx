import { useState } from 'react'
import useTasks from '../Hooks/useTasks'
import useTasksDispatch from '../Hooks/useTasksDispatch'
import { TypeTask } from '../Interfaces/tasks'

export default function TaskList() {
	const tasks = useTasks()

	const dispatch = useTasksDispatch()

	function handleChangeTask(task: TypeTask) {
		dispatch({
			type: 'changed',
			task: task,
		})
	}

	function handleDeleteTask(taskId: string) {
		dispatch({
			type: 'deleted',
			id: taskId,
		})
	}

	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<Task
						task={task}
						onChange={handleChangeTask}
						onDelete={handleDeleteTask}
					/>
				</li>
			))}
		</ul>
	)
}

function Task({
	task,
	onChange,
	onDelete,
}: {
	task: TypeTask
	onChange: (task: TypeTask) => void
	onDelete: (taskId: string) => void
}) {
	const [isEditing, setIsEditing] = useState(false)
	let taskContent
	if (isEditing) {
		taskContent = (
			<>
				<input
					value={task.text}
					onChange={(e) => {
						onChange({
							...task,
							text: e.target.value,
						})
					}}
				/>
				<button onClick={() => setIsEditing(false)}>Guardar</button>
			</>
		)
	} else {
		taskContent = (
			<>
				{task.text}
				<button onClick={() => setIsEditing(true)}>Editar</button>
			</>
		)
	}
	return (
		<label>
			<input
				type='checkbox'
				checked={task.done}
				onChange={(e) => {
					onChange({
						...task,
						done: e.target.checked,
					})
				}}
			/>
			{taskContent}
			<button onClick={() => onDelete(task.id)}>Eliminar</button>
		</label>
	)
}
