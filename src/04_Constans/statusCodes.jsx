export const statusCodes = {
	0: "Completada",
	1: "Pendiente",
	2: "En curso",
};

export const standardTime = [
	{
		option: "corto",
		duration: "30",
		value: { minutes: 30, seconds: 0 },
	},
	{
		option: "medio",
		duration: "45",
		value: { minutes: 45, seconds: 0 },
	},
	{
		option: "largo",
		duration: "60",
		value: { minutes: 59, seconds: 59 },
	},
	{
		option: "",
		duration: "Custom",
		value: "custom",
	},
];

export const filterOptions = [
	{
		option: "Todos",
		value: -1,
	},
	{
		option: "Terminadas",
		value: 0,
	},
	{
		option: "Pendientes",
		value: 1,
	},
	{
		option: "Duración Corta",
		value: 2,
	},
	{
		option: "Duración Medio",
		value: 3,
	},
	{
		option: "Duración larga",
		value: 4,
	},
];

export const messages = {
	titleInitialTime: "Tiempo inicial",
	titleCurrentTime: "Tiempo restante",
	titleTotalTime: "Tiempo total",
};
