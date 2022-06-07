import React, { useEffect, useState } from "react";
import { CTaskList } from "../../01_Components/CTaskList";
import AddIcon from "@mui/icons-material/Add";
import { yupResolver } from "@hookform/resolvers/yup";

import {
	Autocomplete,
	Button,
	createFilterOptions,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	MenuItem,
	TextField,
} from "@mui/material";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TimePicker } from "@mui/lab";

import { useForm } from "react-hook-form";
import { filterOptions } from "../../04_Constans/statusCodes";
import { schema } from "./validations";
import { CGraph } from "../../01_Components/CGraph";

const PTaskApp = ({
	taskAppData,
	createTask,
	updateTask,
	deleteTask,
	startTask,
	editTask,
}) => {
	const orderTaskBy = () => {};

	const [optionTime, setOptionTime] = useState("");
	const [open, setOpen] = useState(false);
	const [openGraph, setOpenGraph] = useState(false);
	const [customTime, setCustomTime] = useState(null);
	const [task, setTask] = useState(null);
	const { register, handleSubmit, setValue, getValues, reset, formState } =
		useForm({
			mode: "all",
			resolver: yupResolver(schema),
		});
	const [filterOption, setFilterOption] = useState("");

	const [taskList, setTaskList] = useState(taskAppData.taskList);

	const onSubmit = (data) => {
		setOpen(false);
		if (task) editTask(task, { ...data, customTimeSelector: customTime });
		else createTask({ ...data, customTimeSelector: customTime });
		reset();
	};

	const onEdit = (data) => {
		setTask(data);
		const fields = ["title", "description"];
		fields.forEach((field) => setValue(field, data[field]));
		setOpen(true);
	};

	useEffect(() => {
		setTaskList(taskAppData.taskList);
		setFilterOption("");
	}, [taskAppData]);

	const handleKeypress = (e) => {
		e.preventDefault();
		return false;
	};
	const filterTaskBy = (status) => {
		console.log(status);
		const result = Object.entries(taskAppData.taskList)
			.filter(([key, value]) =>
				status == 0 || status == 1
					? value.status == status
					: status == 2
					? value.initialTime.minutes <= 30
					: status == 3
					? value.initialTime.minutes > 30 &&
					  value.initialTime.minutes <= 59
					: value.initialTime.minutes > 59
			)
			.map(([key, value]) => value);
		console.log(result);
		status == -1 ? setTaskList(taskAppData.taskList) : setTaskList(result);
	};

	return (
		<>
			<div className="row">
				<div className="col-lg-4 col-12 mb-2">
					<h3>{taskAppData.extras.title}</h3>
				</div>
				<div className="col-lg-4 col-12">
					<TextField
						className="w-100"
						select
						label={taskAppData.extras.filterPlaceholder}
						value={filterOption}
						onChange={(e) => {
							filterTaskBy(e.target.value);
							setFilterOption(e.target.value);
						}}
						variant="standard"
					>
						{filterOptions.map((item) => (
							<MenuItem key={item.option} value={item.value}>
								{item.option}
							</MenuItem>
						))}
					</TextField>
				</div>
				<div className="col-lg-2 col-6 d-flex justify-content-end">
					<Button
						onClick={() => setOpenGraph(true)}
						variant="contained"
					>
						{taskAppData.extras.seeGraph}
					</Button>
				</div>
				<div className="col-lg-2 col-6 d-flex justify-content-end">
					<Button
						onClick={() => setOpen(true)}
						variant="contained"
						endIcon={<AddIcon />}
					>
						{taskAppData.extras.btnAdd}
					</Button>
				</div>
				<div className="col-12 mt-4">
					<CTaskList
						data={taskList}
						currentTask={taskAppData.currentTask}
						deleteTask={deleteTask}
						onUpdate={updateTask}
						onStart={startTask}
						onEdit={onEdit}
					/>
				</div>
			</div>

			<Dialog
				className="px-6 py-6"
				fullScreen
				open={openGraph}
				onClose={() => {
					setOpenGraph(false);
				}}
			>
				<CGraph data={taskAppData.taskList} />
			</Dialog>

			<Dialog
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<DialogTitle>
						{taskAppData.form.extra.modalTitle}
					</DialogTitle>
					<DialogContent>
						<div className="row">
							<div className="col-12 mb-2">
								<TextField
									className="w-100"
									id={taskAppData.form.title.id}
									name={taskAppData.form.title.id}
									label={taskAppData.form.title.label}
									variant="standard"
									{...register(taskAppData.form.title.id)}
								/>
							</div>
							<div className="col-12 mb-2">
								<TextField
									className="w-100"
									id={taskAppData.form.description.id}
									name={taskAppData.form.description.id}
									label={taskAppData.form.description.label}
									multiline
									rows={4}
									variant="standard"
									{...register(
										taskAppData.form.description.id
									)}
								/>
							</div>
							<div className="col-6 mb-2">
								<TextField
									className="w-100"
									id={taskAppData.form.timeSelector.id}
									name={taskAppData.form.timeSelector.id}
									select
									label={taskAppData.form.timeSelector.label}
									value={optionTime}
									{...register(
										taskAppData.form.timeSelector.id
									)}
									onChange={(e) => {
										setOptionTime(e.target.value);
									}}
									variant="standard"
								>
									{taskAppData.form.timeSelector.values.map(
										(item) => (
											<MenuItem
												key={item.duration}
												value={item.value}
											>
												{`${item.duration} ${
													item.option == ""
														? ""
														: "minutos"
												}  `}
											</MenuItem>
										)
									)}
								</TextField>
							</div>
							<div className="col-6 mb-2">
								{optionTime == "custom" ? (
									<LocalizationProvider
										dateAdapter={AdapterDateFns}
									>
										<TimePicker
											ampm={false}
											views={["minutes", "seconds"]}
											inputFormat="mm:ss"
											mask="__:__"
											label={
												taskAppData.form
													.customTimeSelector.label
											}
											value={customTime}
											onChange={(newValue) => {
												if (
													newValue !=
														"Invalid Date" ||
													newValue.length != 0
												) {
													setCustomTime(newValue);
												}
											}}
											renderInput={(params) => (
												<TextField
													onKeyPress={() => {
														handleKeypress(event);
													}}
													className="w-100"
													variant="standard"
													name={
														taskAppData.form
															.customTimeSelector
															.id
													}
													{...params}
													{...register(
														taskAppData.form
															.customTimeSelector
															.id
													)}
												/>
											)}
										/>
									</LocalizationProvider>
								) : null}
							</div>
						</div>
					</DialogContent>
					<DialogActions>
						<Button
							type="submit"
							onClick={() => console.log(formState.errors)}
							disabled={!formState.isValid}
							variant="contained"
						>
							{taskAppData.form.extra.createButton}
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
};

export default PTaskApp;
