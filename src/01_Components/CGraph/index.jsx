import React, { useState } from "react";
import "./index.css";
import {
	VictoryAxis,
	VictoryChart,
	VictoryLabel,
	VictoryLine,
	VictoryZoomContainer,
} from "victory";

export const CGraph = ({ data }) => {
	const [zoomDomain, setZoomDomain] = useState({
		x: [new Date(2022, 1, 1), new Date(2022, 12, 31)],
	});

	const handleZoom = (domain) => {
		setZoomDomain({ domain });
	};

	console.log("data", data);

	const numComplete = data.filter(function (el) {
		return el.status == 0;
	});
	const numPending = data.filter(function (el) {
		return el.status == 1;
	});

	return (
		<VictoryChart
			width={600}
			height={470}
			scale={{ x: "time" }}
			containerComponent={
				<VictoryZoomContainer
					zoomDimension="x"
					zoomDomain={zoomDomain}
					onZoomDomainChange={handleZoom}
				/>
			}
		>
			<VictoryLine
				style={{
					data: { stroke: "tomato", fontSize: "8px" },
				}}
				data={data}
				labels={(obj) => obj.datum.title}
				x="dateCreated"
				y="status"
			/>
			<VictoryAxis label="Fecha" />
			<VictoryAxis
				dependentAxis
				label="Estatus"
				tickFormat={(y) =>
					y == 0.2
						? `Completada (${numComplete.length})`
						: y == 1
						? `Pendientes (${numPending.length})`
						: ""
				}
				tickLabelComponent={<VictoryLabel angle={-90} />}
			/>
		</VictoryChart>
	);
};
