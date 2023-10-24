import "./social-link.css";
function SocialLink({ icon }) {
	return (
		<div className="social-link">
			<img src={icon} alt="icon" />
		</div>
	);
}

export default SocialLink;
