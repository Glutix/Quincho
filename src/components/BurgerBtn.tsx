import React from "react";
import { OpenProps } from "../utils/interfaces";

const BurgerBtn: React.FC<OpenProps> = ({ handleClick, isOpen }) => {
	return (
		<div className="burger-btn">
			<input
				id="checkbox2"
				type="checkbox"
				checked={isOpen}
				onChange={handleClick}
			/>
			<label className="toggle toggle2" htmlFor="checkbox2">
				<div id="bar4" className="bars"></div>
				<div id="bar5" className="bars"></div>
				<div id="bar6" className="bars"></div>
			</label>
		</div>
	);
};

export default BurgerBtn;
