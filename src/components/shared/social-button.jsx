import "./social-button.css";
function SocialButton({ icon, text, theme }) {
	return (
		<div
			className={
				theme && theme === "blue"
					? "social-button social-button-blue"
					: "social-button social-button-white"
			}>
			<img src={icon} alt="icon" />
			<p>{text}</p>
		</div>
	);
}
export default SocialButton;
