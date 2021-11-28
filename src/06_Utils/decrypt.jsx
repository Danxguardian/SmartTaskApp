import CryptoJS from "crypto-js";

export const descrypt = (text) => {
	let bytes = CryptoJS.AES.decrypt(text, "@blable");
	return bytes.toString(CryptoJS.enc.Utf8);
};
