import CryptoJS from "crypto-js";

export const encrypt = (text) => {
	let encryptedText = CryptoJS.AES.encrypt(text, "@blable").toString();
	return encryptedText;
};
