import React, { useEffect, useState } from "react";
import { CTaskList } from "../../01_Components/CTaskList";
import AddIcon from "@mui/icons-material/Add";
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

const PTaskApp = ({
	taskAppData,
	createTask,
	updateTask,
	deleteTask,
	startTask,
	editTask,
	filterTaskBy,
}) => {
	const orderTaskBy = () => {};

	const [optionTime, setOptionTime] = useState("");
	const [open, setOpen] = useState(false);
	const [customTime, setCustomTime] = useState(
		new Date(2007, 1, 1, 1, 59, 59)
	);
	const [task, setTask] = useState(null);
	const { register, handleSubmit, setValue, reset, formState } = useForm();
	const [filterOption, setFilterOption] = useState("");

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

	return (
		<>
			<div className="row">
				<div className="col-6">
					<h3>{taskAppData.extras.title}</h3>
				</div>
				<div className="col-3">
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
				<div className="col-3 d-flex justify-content-end">
					<Button variant="contained" endIcon={<AddIcon />}>
						{taskAppData.extras.btnAdd}
					</Button>
				</div>
				<div className="col-12">
					<CTaskList
						data={taskAppData.taskList}
						currentTask={taskAppData.currentTask}
						deleteTask={deleteTask}
						onUpdate={updateTask}
						onStart={startTask}
						onEdit={onEdit}
					/>
				</div>
			</div>

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
												console.log("nV", newValue);
												setCustomTime(newValue);
											}}
											renderInput={(params) => (
												<TextField
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
						<Button type="submit" variant="contained">
							{taskAppData.form.extra.createButton}
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
};

export default PTaskApp;