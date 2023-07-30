import { FormData, PropsErrorMessage, ErrorformData } from "./interfaces";

const errorMessage: PropsErrorMessage = {
	required: "Este campo es requerido",
	maxLongName: "(Max: 35 caracteres)",
	maxLongText: "(Max: 500 caracteres)",
	minLongText: "(Min: 10 caracteres)",
	invalidEmail: "Ingrese un email valido",
};

const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validate = (data: FormData) => {
	const errors: ErrorformData = {};

	//? Validar nombre
	if (!data.user_name) {
		errors.user_name = errorMessage.required;
	} else if (data.user_name.length > 35) {
		errors.user_name = errorMessage.maxLongName;
	}

	//? Validar correo
	if (!data.user_email) {
		errors.user_email = errorMessage.required;
	} else if (!regexEmail.test(data.user_email)) {
		errors.user_email = errorMessage.invalidEmail;
	}

	//? Validar texto
	if (!data.message) {
		errors.message = errorMessage.required;
	} else if (data.message.length < 10) {
		errors.message = errorMessage.minLongText;
	} else if (data.message.length >= 500) {
		errors.message = errorMessage.maxLongText;
	}

	return errors;
};

export default validate;
