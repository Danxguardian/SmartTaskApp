import axios from "axios";
import "./interceptors";
const postService = (server, root, path, data, config) => {
	const srv = server || "";
	const rootPath = root || "";
	const endPoint = path || "";
	return new Promise((resolve, rejects) => {
		axios
			.post(`${srv}${rootPath}${endPoint}`, data, config || null)
			.then((response) => {
				const result = response;
				if (result.statusCode) {
					rejects(result);
				} else {
					resolve(result);
				}
			})
			.catch((error) => {
				rejects(error);
			});
	});
};
export { postService };
