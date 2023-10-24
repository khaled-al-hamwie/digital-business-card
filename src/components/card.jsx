import CardContent from "./card-content";
import CardFooter from "./card-footer";
import CardHeader from "./card-header";
import CardProfile from "./card-profile";

function Card() {
	return (
		<div className="card">
			<CardProfile />
			<CardHeader />
			<CardContent />
			<CardFooter />
		</div>
	);
}

export default Card;
