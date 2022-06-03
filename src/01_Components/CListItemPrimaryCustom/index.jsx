import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DoneIcon from "@mui/icons-material/Done";
import { messages, statusCodes } from "../../04_Constans/statusCodes";

export const CListItemPrimaryCustom = ({
	className,
	task,
	onDelete,
	onUpdate,
	onStart,
	onEdit,
}) => {
	const { minutes, seconds } = task.currentTime;
	const [[mins, secs], setTime] = useState([minutes, seconds]);
	const [paused, setPaused] = useState(false);
	const [over, setOver] = useState(false);

	const tick = () => {
		if (paused || over) return;
		if (mins === 0 && secs === 0) stopTimer(true);
		else if (mins === 0 && secs === 0) {
			setTime([59, 59]);
		} else if (secs == 0) {
			setTime([mins - 1, 59]);
		} else {
			setTime([mins, secs - 1]);
		}
	};

	/* Detiene el tiempo temporalmente  */
	const pauseTimer = () => {
		setPaused(!paused);
	};

	/* Coloca el tiempo de inicio en el timer */
	const restartTimer = () => {
		setTime([task.initialTime.minutes, task.initialTime.seconds]);
		setPaused(false);
		setOver(false);
		task.currentTime = {
			minutes: task.initialTime.minutes,
			seconds: task.initialTime.seconds,
		};
		task.status = 2;
		onUpdate(task);
	};

	/* Quita de la lista y actualizar */
	const stopTimer = (done) => {
		setPaused(true);
		setOver(true);
		task.status = 1;
		if (done) {
			task.totalTime = {
				minutes: task.initialTime.minutes - mins,
				seconds: task.initialTime.seconds - secs,
			};
			task.status = 0;
		}

		task.currentTime = {
			minutes: mins,
			seconds: secs,
		};

		onUpdate(task);
	};

	useEffect(() => {
		if (task.status == 2) {
			const timerId = setInterval(() => tick(), 1000);
			return () => clearInterval(timerId);
		}
	});

	return (
		<div className={`row ${className ? className : ""}`}>
			<div className="col-lg-6 col-12 taskTitle">{`${task.title}`}</div>
			<div className="col-lg-3 col-4 d-flex justify-content-lg-start taskStatus">
				{`${messages["statusTitle"]}:  ${statusCodes[task.status]}`}
			</div>
			<div className="col-lg-3 col-8 d-flex justify-content-end">
				{task.status == 2 ? (
					<>
						<button onClick={pauseTimer}>
							<PauseIcon />
						</button>

						<button onClick={() => stopTimer(false)}>
							<StopIcon />
						</button>

						<button onClick={restartTimer}>
							<RestartAltIcon />
						</button>

						<button onClick={() => stopTimer(true)}>
							<DoneIcon />
						</button>
					</>
				) : null}
				{task.status == 1 ? (
					<>
						<button onClick={() => onStart(task)}>
							<PlayArrowIcon />
						</button>

						<button onClick={() => onEdit(task)}>
							<EditIcon />
						</button>
					</>
				) : null}

				{task.status != 2 ? (
					<button onClick={onDelete}>
						<DeleteIcon />
					</button>
				) : null}
			</div>
			<div className="col-4 taskTime">{`${
				messages["titleInitialTime"]
			}: ${
				task.initialTime
					? `${task.initialTime.minutes
							.toString()
							.padStart(2, "0")}:${task.initialTime.seconds
							.toString()
							.padStart(2, "0")}`
					: "----"
			}`}</div>
			<div className="col-4 taskTime">{`${
				messages["titleCurrentTime"]
			}: ${
				task.status != 2
					? task.currentTime
						? `${task.currentTime.minutes
								.toString()
								.padStart(2, "0")}:${task.currentTime.seconds
								.toString()
								.padStart(2, "0")}`
						: "----"
					: `${mins.toString().padStart(2, "0")}:${secs
							.toString()
							.padStart(2, "0")}`
			}`}</div>
			<div className="col-4 taskTime">{`${messages["titleTotalTime"]}: ${
				task.totalTime
					? `${task.totalTime.minutes
							.toString()
							.padStart(2, "0")}:${task.totalTime.seconds
							.toString()
							.padStart(2, "0")}`
					: "----"
			}`}</div>
			<div className="col-12 taskDescription">{task.description}</div>
		</div>
	);
};
