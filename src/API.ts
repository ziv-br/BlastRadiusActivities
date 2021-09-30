import { NULL_IMAGE, RESULT_COUNT } from "./consts";
import { ActivityData } from "./typings";

export default class API {
	public static getGif(searchTerm: string): Promise<string> {
		return fetch(`https://g.tenor.com/v1/search?q=${encodeURIComponent(searchTerm)}&key=LIVDSRZULELA&limit=1`)
			.then(r => r.json())
			.then(r => {
				if (!r) return NULL_IMAGE;
				
				const [data] = r.results || [];
				const dict = data?.media?.find(({gif}) => !!gif);
				if (!dict) return NULL_IMAGE;
			
				return dict.gif.preview;
			})
	}

	public static getActivities(): Promise<ActivityData[]> {
	const promises: Promise<ActivityData>[] = [];
	for (let i = 0; i < RESULT_COUNT; i++) promises.push(
		fetch("https://www.boredapi.com/api/activity")
			.then(r => r.json())
	);

	return Promise.all(promises);
}
}