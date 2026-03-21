import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { RiCameraLine } from "@remixicon/react";

interface UserHeaderProps {
	image: Image;
}

export default function UserHeader({ image }: UserHeaderProps) {
	return (
		<a href={image.user.links.html} target="_blank" rel="noreferrer">
			<Flex alignItems="center" gap={4}>
				<Avatar.Root boxSize="52px" flexShrink={0}>
					<Avatar.Image
						src={image.user.profile_image.large}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
					<Avatar.Fallback
						style={{ fontSize: "18px", fontWeight: 500 }}
					>
						{image.user.name?.[0]}
					</Avatar.Fallback>
				</Avatar.Root>
				<Box>
					<Text
						fontSize="md"
						fontWeight={600}
						className="text-heading"
					>
						{image.user.name}
					</Text>
					<Flex alignItems="center" gap={"4px"}>
						<RiCameraLine
							size={14}
							color="#94a8b0"
							style={{ flexShrink: 0 }}
						/>
						<span
							className="text-muted"
							style={{ fontSize: "0.75rem", lineHeight: 1 }}
						>
							@{image.user.username}
						</span>
					</Flex>
				</Box>
			</Flex>
		</a>
	);
}
