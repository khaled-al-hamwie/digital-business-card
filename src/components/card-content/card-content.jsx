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
			<h2 className="card-content-section-title">About</h2>
			<p className="card-content-section-content">
				I am a frontend developer with a particular interest in making
				things simple and automating daily tasks. I try to keep up with
				security and best practices, and am always looking for new
				things to learn.
			</p>
			<h2 className="card-content-section-title">Interests</h2>
			<p className="card-content-section-content">
				Food expert. Music scholar. Reader. Internet fanatic. Bacon
				buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
				fanatic.
			</p>
		</div>
	);
}

export default CardContent;
