import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import TasksProvider from './Contexts/TasksProvider'

export default function Tasks() {
	return (
		<>
			<p>
				Este proyecto sirve como plantilla para usar Context + Reducer.
				<br />
				El código destacado se encuentra en ./src/TaskApp/
			</p>
			<TasksProvider>
				<h1>Lista de tareas</h1>
				<AddTask />
				<TaskList />
			</TasksProvider>
		</>
	)
}
