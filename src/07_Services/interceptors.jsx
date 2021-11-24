import axios from "axios";

//Interceptor for all the petitions get, post.

/* Request interceptor */
/* If need a configurations for all petitions use this*/
axios.interceptors.request.use((config) => {
	config.headers["extraHeader"] = "extraHeader";
	config.headers["anotherExtraHeader"] = "anotherExtraHeader";
	config.headers["Authorization"] = "Authorization";

	return config;
});

/* Response interceptor */
/* axios.interceptors.response.use(
	(response) => {
		if (response) {
			retries = 0;
		}
		return response;
	},
	async (error) => {
		const hostNameRGX = new RegExp("//([[^/]*])?([^:/]*)?");
		const hostNameOld = hostNameRGX.exec(error.config.url)[2];
		const hostNameNew = MOCKUPS_IDS[retries];
		const status = error.response ? error.response.status : null;
		if (
			status === 404 &&
			CONSTANTS.REACT_APP_ENV === "MOCKUPS" &&
			retries < MOCKUPS_IDS.length &&
			hostNameOld !== hostNameNew
		) {
			error.config.url = error.config.url.replace(
				hostNameOld,
				MOCKUPS_IDS[retries]
			);
			retries;
			await delay(timeRetries);
			return axios.request(error.config);
		}
		if (
			status !== 200 &&
			error.response &&
			error.response.data &&
			error.response.data.notifications &&
			error.response.data.notifications[0] &&
			error.response.data.notifications[0].metadata &&
			error.response.data.notifications[0].metadata.action === "R" &&
			retries < CONSTANTS.RETRIES
		) {
			retries;
			await delay(timeRetries);
			return axios.request(error.config);
		}
		retries = 0;
		return Promise.reject(error);
	}
);
 */

axios.interceptors.response.use(
	(response) => {
		console.log("IntR", response);
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	(error) => {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		console.log("IntR", error);
		return Promise.reject(error);
	}
);
