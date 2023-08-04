import React from "react";
interface Props {
	isVisible: Boolean;
}

const BurgerBtn: React.FC<Props> = (state) => {
	return (
		state && (
			<div>
				<input id="checkbox2" type="checkbox" />
				<label className="toggle toggle2" htmlFor="checkbox2">
					<div id="bar4" className="bars"></div>
					<div id="bar5" className="bars"></div>
					<div id="bar6" className="bars"></div>
				</label>
			</div>
		)
	);
};

export default BurgerBtn;
