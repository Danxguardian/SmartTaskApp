/* Con esto podemos cambiar en lugar de usar .env */
const CONFIG = {
	development: {
		REACT_APP_ENV: "LOCAL",
		PORT: "4000",
		API_SERVER: "http://localhost:4000",
		API_ROOT: "",
	},
	mockups: {
		REACT_APP_ENV: "MOCKUPS",
		PORT: "4000",
		API_SERVER: "https://demo.mockable.io",
		API_ROOT: "",
	},
	uat: {
		REACT_APP_ENV: "UAT",
		PORT: "4000",
		API_SERVER: "https://api.cuenta-digitalUAT.recursos/",
		API_ROOT: "api/services/package",
	},
	ist: {
		REACT_APP_ENV: "IST",
		PORT: "4000",
		API_SERVER: "http://172.19.136.44:9104/",
		API_ROOT: "package/api/v1",
	},
	production: {
		REACT_APP_ENV: "PRODUCTION",
		PORT: "4000",
		API_SERVER: "http://172.19.136.44:9104/",
		API_ROOT: "package/api/v1",
	},
};

const validateHost = () => {
	const sessionEnv = sessionStorage.getItem("env");
	console.log(sessionEnv);
	console.log(`Work In: ${window.location.hostname} con ENV ${sessionEnv}`);

	if (sessionEnv) {
		return CONFIG[String(sessionEnv)];
	}

	switch (window.location.hostname) {
		case "localhost":
			return CONFIG["development"];
		case "192.196.1.1":
			return CONFIG["ist"];
		case "my.uat.ip":
			return CONFIG["uat"];
		case "my.prod.ip":
			return CONFIG["production"];
		default:
			return CONFIG["development"];
	}
};

const CONSTANTS = validateHost();

export default CONSTANTS;
