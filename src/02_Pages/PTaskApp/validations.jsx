import * as yup from "yup";
import { messages } from "../../04_Constans/statusCodes";

export const schema = yup.object().shape({
	title: yup.string().required(messages["requerido"]),
	description: yup.string().required(messages["requerido"]),
	timeSelector: yup.lazy((value) => {
		switch (typeof value) {
			case "object":
				return yup.object(); // schema for object
			case "string":
				return yup.string().required(messages["requerido"]);
		}
	}),

	customTimeSelector: yup.string().when("timeSelector", {
		is: "custom",
		then: yup.string().required(messages["requerido"]),
	}),
});
