//? Interfaces
export interface ProjectProps {
	name: string;
	image: { link: string; name: string };
	description: string;
	repository: string;
	demo: string;
}

export interface FormData {
	user_name: string;
	user_email: string;
	message: string;
}

export interface ErrorformData {
	user_name?: string | null;
	user_email?: string | null;
	message?: string | null;
}

export interface PropsErrorMessage {
	required: string;
	maxLongName: string;
	maxLongText: string;
	minLongText: string;
	invalidEmail: string;
}

export interface TechProps {
	name: string;
	image: string;
	url: string;
}

export interface SlideProps {
	title: string;
	url: string;
}

//? Types
export type Project = ProjectProps[];
export type Tech = TechProps[];
export type Slides = SlideProps[];
