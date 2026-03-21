import Masonry from "react-masonry-css";
import ImageItem from "@/components/image-item";

interface ImagesGridProps {
	images: Images;
}

export default function ImagesGrid({ images }: ImagesGridProps) {
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
			{images.map((image, index) => (
				<div key={image.id}>
					<ImageItem image={image} index={index} />
				</div>
			))}
		</Masonry>
	);
}
