import ImageItem from "@/components/image-item";

interface ImagesGridProps {
	images: Images;
}

export default function ImagesGrid({ images }: ImagesGridProps) {
	return (
		<div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
			{images.map((image, index) => (
				<div key={image.id} className="break-inside-avoid">
					<ImageItem image={image} index={index} />
				</div>
			))}
		</div>
	);
}
