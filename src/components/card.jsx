import CardContent from "./card-content/card-content";
import CardFooter from "./card-footer/card-footer";
import CardProfile from "./card-profile";
import "./card.css";

function Card() {
	return (
		<div className="card">
			<CardProfile />
			<CardContent />
			<CardFooter />
		</div>
	);
}

export default Card;
