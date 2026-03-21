import axios from "axios";
import { createContext, useContext, useState } from "react";

interface ContextProps {
	images: Images;
	itemsPerPage: number;
	currentPage: number;
	loading: boolean;
	search: string;
	totalPages: number;
	current: Image | null;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	fetchImages: () => void;
	fetchSearchResults: () => void;
	fetchImageById: (id: string) => void;
	clearCurrent: () => void;
}

const ImageContext = createContext({} as ContextProps);

export default function ImageProvider({ children }: any) {
	const [images, setImages] = useState<Images>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);
	const [current, setCurrent] = useState<Image | null>(null);

	const itemsPerPage: number = 20;
	const config = {
		headers: {
			Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
		},
	};
	const BASE_URL = "https://api.unsplash.com";

	const fetchImages = async () => {
		setLoading(true);
		try {
			const res = await axios.get(
				`${BASE_URL}/photos?per_page=${itemsPerPage}&page=${currentPage}`,
				config,
			);
			const data = res.data;
			setImages(data);
			setLoading(false);
		} catch (err) {
			console.log(err);

			setLoading(false);
		}
	};

	const fetchSearchResults = async () => {
		setLoading(true);
		try {
			const res = await axios.get(
				`${BASE_URL}/search/photos?query=${search}&per_page=${itemsPerPage}&page=${currentPage}`,
				config,
			);
			setImages(res.data.results);
			setTotalPages(res.data.total_pages);
			setLoading(false);
		} catch (err) {
			if (err instanceof Error) {
				console.log(err.message);
			}
			setLoading(false);
		}
	};

	const fetchImageById = async (id: string) => {
		setLoading(true);
		try {
			const res = await axios.get(`${BASE_URL}/photos/${id}`, config);
			setCurrent(res.data);
			setLoading(false);
		} catch (err) {
			if (err instanceof Error) {
				console.log(err.message);
			}
			setLoading(false);
		}
	};

	const clearCurrent = () => {
		setCurrent(null);
	};

	return (
		<ImageContext.Provider
			value={{
				images,
				totalPages,
				loading,
				current,
				search,
				itemsPerPage,
				currentPage,
				fetchImages,
				fetchSearchResults,
				fetchImageById,
				setCurrentPage,
				setSearch,
				clearCurrent,
			}}
		>
			{children}
		</ImageContext.Provider>
	);
}

export const useImage = () => useContext(ImageContext);
