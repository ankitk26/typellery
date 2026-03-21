import Masonry from "react-masonry-css";
import ImageItem from "@/components/image-item";
import { useImage } from "@/context/image-context";

export default function ImagesGrid() {
	const { images } = useImage();

	const breakpoints = {
		default: 3,
		1100: 2,
		700: 1,
	};

	return (
		<Masonry
			breakpointCols={breakpoints}
			className="my-masonry-grid"
			columnClassName="my-masonry-grid_column"
		>
			{images.map((image) => (
				<div key={image.id}>
					<ImageItem image={image} />
				</div>
			))}
		</Masonry>
		// <pre>{JSON.stringify(images)}</pre>
	);
}
