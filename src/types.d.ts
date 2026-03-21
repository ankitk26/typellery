type Image = {
	id: string;
	description?: string;
	urls: {
		small: string;
	};
	links: {
		self: string;
	};
	likes: number;
	views?: number;
	downloads?: number;
	user: {
		username: string;
		name: string;
		profile_image: {
			large: string;
		};
		links: {
			html: string;
		};
	};
};

type Images = Image[];
