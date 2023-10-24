import emailLogo from "../shared/icons/email.svg";
import linkedInLogo from "../shared/icons/linkedin.svg";
import SocialButton from "../shared/social-button";
import "./card-content.css";
function CardContent() {
	return (
		<div className="card-content">
			<h1 className="card-content-person-name">Laura Smith</h1>
			<h3 className="card-content-person-carer">Frontend Developer</h3>
			<h4 className="card-content-person-website">laurasmith.website</h4>
			<div className="card-content-person-social">
				<SocialButton icon={emailLogo} text="Email" theme="white" />
				<SocialButton
					icon={linkedInLogo}
					text="LinkedIn"
					theme="blue"
				/>
			</div>
		</div>
	);
}

export default CardContent;
