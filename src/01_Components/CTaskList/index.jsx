import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import "./index.css";
import { Divider, IconButton, ListItemSecondaryAction } from "@mui/material";

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
				bgcolor: "transparent",
				position: "relative",
				overflow: "auto",
				height: window.innerHeight - 150,
				maxHeight: 930,
			}}
		>
			{currentTask && (
				<ListSubheader className="currentTask">
					<ListItemText>
						<CListItemPrimaryCustom
							task={currentTask}
							onDelete={() => deleteTask(currentTask)}
							onUpdate={(task) => onUpdate(task)}
							onStart={(task) => onStart(task)}
						/>
					</ListItemText>
				</ListSubheader>
			)}

			{data.map(
				(task) =>
					task.status != 2 && (
						<>
							<ListItem
								className="mb-2 mt-2"
								key={`task-${task.id}-${task.title}`}
							>
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
							<Divider light />
						</>
					)
			)}
		</List>
	);
};
