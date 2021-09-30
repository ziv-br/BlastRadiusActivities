import React from "react";
import API from "../../API";
import { ActivityData } from "../../typings";
import Thinker from "../Thinker/Thinker";

interface ActivityProps {
	activity: ActivityData;
}

const Activity: React.FunctionComponent<ActivityProps> = ({ activity: { activity, link } }) => {
	const [gifUrl, setGifUrl] = React.useState("");
	const [gettingGif, setGettingGif] = React.useState(false);

	React.useEffect(() => {
		setGettingGif(true);

		API.getGif(activity)
			.then(r => {
				const img = new Image();
				img.addEventListener("load", () => {
					setGettingGif(false);
					setGifUrl(r);
				});
				img.src = r;
			});
	}, [activity]);

	return <a className="Activity" href={link} target="_blank">
		{
			gettingGif ?
				<Thinker className="Activity__thinking" /> :
				<div className="Activity__icon" style={{ backgroundImage: `url(${gifUrl})` }} />
		}
		<div className="Activity__name">{activity}</div>
	</a>
};

export default Activity;

import "./Activity.style";
