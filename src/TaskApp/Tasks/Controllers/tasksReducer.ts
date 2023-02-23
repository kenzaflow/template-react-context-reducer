import { TypeActionTask, TypeTask } from '../Interfaces/tasks'

export default function tasksReducer(
	tasks: TypeTask[],
	action: TypeActionTask,
) {
	switch (action.type) {
		case 'added': {
			return [
				...tasks,
				{
					id: action.id,
					text: action.text,
					done: false,
				},
			]
		}
		case 'changed': {
			return tasks.map((t) => {
				if (t.id === action.task.id) {
					return action.task
				} else {
					return t
				}
			})
		}
		case 'deleted': {
			return tasks.filter((t) => t.id !== action.id)
		}
		default: {
			throw Error('Unknown action: ' + action)
		}
	}
}
