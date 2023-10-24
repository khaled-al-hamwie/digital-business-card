import facebookIcon from "../shared/icons/facebook.svg";
import githubIcon from "../shared/icons/github.svg";
import instagramIcon from "../shared/icons/instagram.svg";
import twitterIcon from "../shared/icons/twitter.svg";
import SocialLink from "../shared/social-link";
import "./card-footer.css";
function CardFooter() {
	return (
		<div className="card-footer">
			<SocialLink icon={twitterIcon} />
			<SocialLink icon={facebookIcon} />
			<SocialLink icon={instagramIcon} />
			<SocialLink icon={githubIcon} />
		</div>
	);
}

export default CardFooter;
