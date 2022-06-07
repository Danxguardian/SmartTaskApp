import * as Types from "../Actions/actionTypes";
import { v4 as uuidv4 } from "uuid";
let initTask = [];
/* Status: 0 - hecha, 1 - pendiente, 2 - actual */
Array.from({ length: 50 }, (x, i) => {
	let minutes = Math.floor(Math.random() * (60 - 0));
	let seconds = Math.floor(Math.random() * (60 - 0));
	let remainingMinutes = Math.floor(Math.random() * (minutes - 0));
	let remainingSeconds = Math.floor(Math.random() * (seconds - 0));
	let status = Math.floor(Math.random() * (2 - 0));
	initTask.push({
		id: uuidv4(),
		initialTime: {
			minutes: minutes,
			seconds: seconds,
		},
		currentTime: {
			minutes: remainingMinutes,
			seconds: remainingSeconds,
		},
		totalTime:
			status == 0
				? {
						minutes: minutes - remainingMinutes,
						seconds: seconds - remainingSeconds,
				  }
				: { minutes: 0, seconds: 0 },
		title: "Dummy Task " + (i + 1),
		status: status,
		dateCreated: new Date(
			2022,
			Math.floor(Math.random() * (new Date().getMonth() + 2 - 1)),
			Math.floor(Math.random() * (new Date().getDate() - 1))
		),
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tincidunt felis in facilisis. Aenean cursus cursus massa nec eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam pharetra pharetra eros eget vulputate. Duis ornare, lorem non sollicitudin semper",
	});
});
const INIT_STATE = {
	taskList: initTask,
};

const taskReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case Types.TASK_ADD: {
			const newTask = {
				...action.payload,
				id: uuidv4(),
				currentTime: {
					minutes: action.payload.initialTime.minutes,
					seconds: action.payload.initialTime.seconds,
				},
				totalTime: {
					minutes: 0,
					seconds: 0,
				},
				status: 1,
			};
			return { ...state, taskList: [...state.taskList, newTask] };
		}

		case Types.TASK_DELETE: {
			return {
				...state,
				taskList: state.taskList.filter(
					(item, index) => item.id !== action.payload.id
				),
			};
		}

		case Types.TASK_UPDATE: {
			if (action.payload.status == 2)
				return {
					taskList: [
						...state.taskList.filter(
							(x) => x.id !== action.payload.id
						),
						action.payload,
					],
					taskCurrent: action.payload,
				};
			return {
				taskList: [
					...state.taskList.filter((x) => x.id !== action.payload.id),
					action.payload,
				],
			};
		}

		case Types.TASK_TO_CURRENT: {
			const task = action.payload;
			task.status = 2;
			return { ...state, taskCurrent: task };
		}
		default:
			return state;
	}
};

export default taskReducer;
