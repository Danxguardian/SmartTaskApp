import {
	TASK_ADD,
	TASK_DELETE,
	TASK_TO_CURRENT,
	TASK_UPDATE,
} from "./actionTypes";

const taskAdd = (payload) => {
	return { type: TASK_ADD, payload: payload };
};

const taskStart = (payload) => {
	return { type: TASK_TO_CURRENT, payload: payload };
};

const taskDelete = (payload) => {
	return { type: TASK_DELETE, payload: payload };
};

const taskUpdate = (payload) => {
	return { type: TASK_UPDATE, payload: payload };
};

export { taskAdd, taskDelete, taskUpdate, taskStart };

export default {
	taskAdd,
	taskStart,
	taskDelete,
	taskUpdate,
};
