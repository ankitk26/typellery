import axios from "axios";

const BASE_URL = "https://api.unsplash.com";

const config = {
	headers: {
		Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
	},
};

const ITEMS_PER_PAGE = 20;

export type SearchResult = {
	results: Images;
	total_pages: number;
};

export async function fetchPhotos(page: number): Promise<SearchResult> {
	const res = await axios.get(
		`${BASE_URL}/photos?per_page=${ITEMS_PER_PAGE}&page=${page}`,
		config,
	);
	const hasNextPage = res.data.length === ITEMS_PER_PAGE;
	return { results: res.data, total_pages: hasNextPage ? page + 1 : page };
}

export async function fetchSearch(
	query: string,
	page: number,
): Promise<SearchResult> {
	const res = await axios.get(
		`${BASE_URL}/search/photos?query=${query}&per_page=${ITEMS_PER_PAGE}&page=${page}`,
		config,
	);
	return res.data;
}

export async function fetchPhotoById(id: string): Promise<Image> {
	const res = await axios.get(`${BASE_URL}/photos/${id}`, config);
	return res.data;
}
