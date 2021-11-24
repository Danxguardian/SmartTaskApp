import axios from "axios";
import "./interceptors";

const getService = (server, root, path, config) => {
	const srv = server || "";
	const rootPath = root || "";
	const endPoint = path || "";
	return new Promise((resolve, rejects) => {
		axios
			.get(`${srv}${rootPath}${endPoint}`, config || null)
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
const getServicePDF = (server, root, path, config) => {
	const srv = server || "";
	const rootPath = root || "";
	const endPoint = path || "";
	return new Promise((resolve, rejects) => {
		axios
			.get(`${srv}${rootPath}${endPoint}`, { responseType: "blob" })
			.then((response) => {
				const file = new Blob([response.data], {
					type: "application/pdf",
				});
				if (
					navigator.userAgent.indexOf("MSIE") != -1 ||
					!!document.documentMode == true
				) {
					navigator.msSaveOrOpenBlob(file, "pdfFile.pdf");
				} else {
					const fileURL = URL.createObjectURL(file);
					window.open(fileURL, "pdfFile.pdf");
				}
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
export { getService, getServicePDF };
