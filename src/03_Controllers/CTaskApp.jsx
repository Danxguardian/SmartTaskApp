import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { standardTime } from "../04_Constans/statusCodes";
import * as taskActions from "../05_Store/Actions/ATask";

const CTaskApp = ({ RenderComponent }) => {
	const stateForWorks = useSelector((state) => state.task);
	const taskList = stateForWorks.taskList;
	/* const [taskList, setTaskList] = useState(stateForWorks.taskList); */
	const dispatch = useDispatch();

	const createTask = (data) => {
		let customTime = moment(data.customTimeSelector).format("mm,ss");
		dispatch(
			taskActions.taskAdd({
				initialTime:
					data.timeSelector === "custom"
						? {
								minutes: customTime.split(",")[0],
								seconds: customTime.split(",")[1],
						  }
						: data.timeSelector,
				title: data.title,
				dateCreated: new Date(),
				description: data.description,
			})
		);
	};

	const editTask = (task, data) => {
		let customTime = moment(data.customTimeSelector).format("mm,ss");
		task.title = data.title;
		task.description = data.description;
		task.initialTime =
			data.timeSelector === "custom"
				? {
						minutes: customTime.split(",")[0],
						seconds: customTime.split(",")[1],
				  }
				: data.timeSelector;
		task.currentTime =
			data.timeSelector === "custom"
				? {
						minutes: customTime.split(",")[0],
						seconds: customTime.split(",")[1],
				  }
				: data.timeSelector;
		dispatch(taskActions.taskUpdate(task));
	};

	const startTask = (task) => {
		dispatch(taskActions.taskStart(task));
	};

	const updateTask = (task) => {
		dispatch(taskActions.taskUpdate(task));
	};

	const deleteTask = (item) => {
		dispatch(taskActions.taskDelete(item));
	};

	const taskAppData = {
		form: {
			title: {
				id: "title",
				label: "Titulo tarea",
				value: "",
			},
			description: {
				id: "description",
				label: "Titulo tarea",
				value: "",
			},
			timeSelector: {
				id: "timeSelector",
				label: "Duración",
				values: standardTime,
			},
			customTimeSelector: {
				id: "customTimeSelector",
				label: "Minutos y segundos",
				value: "",
			},
			extra: {
				createButton: "Crear Tarea",
				titleInitialTime: "Tiempo inicial",
				titleCurrentTime: "Tiempo restante",
				titleTotalTime: "Tiempo total",
				modalTitle: "Registrar tarea",
			},
		},
		taskList: taskList,
		currentTask: stateForWorks.taskCurrent
			? stateForWorks.taskCurrent
			: null,
		defaultTime: standardTime,
		extras: {
			title: "Smart Task App",
			btnAdd: "Agregar tarea",
			filterPlaceholder: "Filtrar por",
			seeGraph: "Ver grafica",
			closeGraph: "Cerrar grafica",
		},
	};

	const propsToComponent = {
		taskAppData: taskAppData,
		createTask: createTask,
		startTask: startTask,
		updateTask: updateTask,
		editTask: editTask,
		deleteTask: deleteTask,
	};

	return <RenderComponent {...propsToComponent} />;
};

export default CTaskApp;
