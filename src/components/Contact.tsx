import React, {
	ChangeEvent,
	useRef,
	useState,
	useEffect,
	FormEvent,
} from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import validate from "../utils/validate";
import { FormData, ErrorformData } from "../utils/interfaces";
import Swal from "sweetalert2";

const Contact: React.FC = () => {
	const form = useRef<HTMLFormElement>(null);
	const [formData, setFormData] = useState<FormData>({
		user_name: "",
		user_email: "",
		message: "",
	});
	const [errors, setErrors] = useState<ErrorformData>({
		user_name: null,
		user_email: null,
		message: null,
	});
	const [isValid, setIsValid] = useState<boolean>(false);

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const sendEmail = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (form.current && isValid) {
			emailjs
				.sendForm(
					"service_dhkyyrg",
					"template_nq45l9r",
					form.current,
					"leaVQ4vTzlWI2IXEx"
				)
				.then(
					(_result: EmailJSResponseStatus) => {
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Mensaje enviado correctamente",
							showConfirmButton: false,
							text: "¡Gracias por tu mensaje! Estaré atento para responder lo que necesites. ¡Hasta pronto! 😊",
						});

						setFormData({
							user_name: "",
							user_email: "",
							message: "",
						});
						setErrors({
							user_name: null,
							user_email: null,
							message: null,
						});

						const formIsValid = Object.values(errors).every(
							(error) => error === ""
						);
						setIsValid(formIsValid);
					},
					(_error) => {
						Swal.fire({
							position: "center",
							icon: "error",
							title: "Ha ocurrido un error inesperado",
							showConfirmButton: false,
							text: "Ups, parece que algo salió mal. Por favor, intenta enviar tu mensaje a través de otro medio de comunicación. 😔",
						});
					}
				);
		}
	};

	useEffect(() => {
		if (
			Object.keys(formData).some(
				(key) => formData[key as keyof FormData] !== ""
			)
		) {
			setErrors(validate(formData));
		}
	}, [formData]);

	useEffect(() => {
		setIsValid(Object.values(errors).every((error) => error === ""));
	}, [errors]);

	return (
		<div className="contact">
			<h2 id="contact">Contáctame</h2>

			<form
				ref={form}
				onSubmit={sendEmail}
				className="form"
				data-aos="flip-down"
				data-aos-offset="300"
				data-aos-easing="ease-in-sine"
			>
				<section className="inputGroup">
					<input
						type="text"
						name="user_name"
						value={formData.user_name}
						onChange={handleChange}
						autoComplete="off"
						required
					/>
					<label>Nombre</label>
					{errors.user_name ? (
						<span className="error-message">{errors.user_name}</span>
					) : (
						""
					)}
				</section>

				<section className="inputGroup">
					<input
						type="text"
						name="user_email"
						value={formData.user_email}
						onChange={handleChange}
						autoComplete="off"
						required
					/>
					<label>Email</label>
					{errors.user_email ? (
						<span className="error-message">{errors.user_email}</span>
					) : (
						""
					)}
				</section>

				<section className="form-section">
					<label>Mensaje</label>
					<textarea
						name="message"
						placeholder="Escribe tu mensaje"
						maxLength={500}
						minLength={10}
						value={formData.message}
						onChange={handleChange}
					/>
					{errors.message ? (
						<span className="error-message">{errors.message}</span>
					) : (
						""
					)}
				</section>

				<section className="form-section">
					<button
						className={isValid ? "" : "disable"}
						type="submit"
						value="Send"
						disabled={!isValid}
					>
						Enviar
					</button>
				</section>
			</form>
		</div>
	);
};

export default Contact;
