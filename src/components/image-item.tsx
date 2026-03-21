import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

interface IProps {
	image: Image;
	index?: number;
}

export default function ImageItem({ image, index = 0 }: IProps) {
	return (
		<Link to="/images/$id" params={{ id: image.id }}>
			<div
				className="image-card animate-fade-in-up"
				style={{ animationDelay: `${(index % 6) * 0.07}s` }}
			>
				<div style={{ overflow: "hidden" }}>
					<Image
						src={image.urls.regular}
						alt={image.description || `Photo by ${image.user.name}`}
						w="full"
						objectFit="cover"
						display="block"
					/>
				</div>
				<Flex
					alignItems="center"
					py={3}
					px={4}
					gap={3}
					borderTop="1px solid #f5f0eb"
				>
					<Avatar.Root boxSize="28px">
						<Avatar.Image
							src={image.user.profile_image.large}
							style={{ borderRadius: "50%" }}
						/>
						<Avatar.Fallback
							style={{ fontSize: "11px", fontWeight: 500 }}
						>
							{image.user.name[0]}
						</Avatar.Fallback>
					</Avatar.Root>
					<Text
						fontSize="sm"
						fontWeight={500}
						className="text-body"
						lineClamp={1}
					>
						{image.user.name}
					</Text>
				</Flex>
			</div>
		</Link>
	);
}
