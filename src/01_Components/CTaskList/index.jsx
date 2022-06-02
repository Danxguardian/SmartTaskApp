import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import "./index.css";
import { IconButton, ListItemSecondaryAction } from "@mui/material";

import { CListItemPrimaryCustom } from "../CListItemPrimaryCustom";

export const CTaskList = ({
	data,
	currentTask,
	deleteTask,
	onUpdate,
	onStart,
	onEdit,
}) => {
	return (
		<List
			sx={{
				width: "100%",
				bgcolor: "background.paper",
				position: "relative",
				overflow: "auto",
				height: 1000,
				maxHeight: 1000,
			}}
		>
			<ListSubheader>
				<ListItemText>
					{currentTask && (
						<CListItemPrimaryCustom
							className={"testBorder"}
							task={currentTask}
							onDelete={() => deleteTask(currentTask)}
							onUpdate={(task) => onUpdate(task)}
							onStart={(task) => onStart(task)}
						/>
					)}
				</ListItemText>
			</ListSubheader>
			{data.map(
				(task) =>
					task.status != 2 && (
						<ListItem key={`task-${task.id}-${task.title}`}>
							<ListItemText>
								<CListItemPrimaryCustom
									task={task}
									onDelete={() => deleteTask(task)}
									/* onUpdate={onUpdate} */
									onStart={(task) => onStart(task)}
									onEdit={onEdit}
								/>
							</ListItemText>
						</ListItem>
					)
			)}
		</List>
	);
};
