export interface TypeTask {
	id: string
	text: string
	done: boolean
}

export type TypeActionTask =
	| { type: 'added'; id: string; text: string }
	| { type: 'changed'; task: TypeTask }
	| { type: 'deleted'; id: string }
