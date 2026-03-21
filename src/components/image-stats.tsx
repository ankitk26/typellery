import { Box, Flex, Text } from "@chakra-ui/react";
import { RiDownloadFill, RiEyeFill, RiHeartFill } from "@remixicon/react";

interface ImageStatsProps {
	image: Image;
}

export default function ImageStats({ image }: ImageStatsProps) {
	return (
		<Flex flexDir="column" gap={4}>
			<Flex alignItems="center" gap={3}>
				<Box
					w="32px"
					h="32px"
					borderRadius="8px"
					bg="#f5f0eb"
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexShrink={0}
				>
					<RiHeartFill size={15} color="#0d9488" />
				</Box>
				<Flex flexDirection="column">
					<Text
						fontSize="sm"
						fontWeight={600}
						className="text-primary"
						lineHeight={1}
					>
						{image.likes.toLocaleString()}
					</Text>
					<span
						className="label"
						style={{ fontSize: "0.55rem", marginTop: "2px" }}
					>
						Likes
					</span>
				</Flex>
			</Flex>

			<Flex alignItems="center" gap={3}>
				<Box
					w="32px"
					h="32px"
					borderRadius="8px"
					bg="#f5f0eb"
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexShrink={0}
				>
					<RiEyeFill size={15} color="#0d9488" />
				</Box>
				<Flex flexDirection="column">
					<Text
						fontSize="sm"
						fontWeight={600}
						className="text-primary"
						lineHeight={1}
					>
						{image.views?.toLocaleString() ?? "—"}
					</Text>
					<span
						className="label"
						style={{ fontSize: "0.55rem", marginTop: "2px" }}
					>
						Views
					</span>
				</Flex>
			</Flex>

			<a
				href={image.links.download}
				target="_blank"
				rel="noreferrer"
				style={{ textDecoration: "none", color: "inherit" }}
			>
				<Flex
					alignItems="center"
					gap={3}
					borderRadius="8px"
					py={1}
					cursor="pointer"
					transition="all 0.15s ease"
					_hover={{
						bg: "#f0fdfa",
					}}
				>
					<Box
						w="32px"
						h="32px"
						borderRadius="8px"
						bg="#0d9488"
						display="flex"
						alignItems="center"
						justifyContent="center"
						flexShrink={0}
					>
						<RiDownloadFill size={15} color="white" />
					</Box>
					<Flex flexDirection="column">
						<Text
							fontSize="sm"
							fontWeight={600}
							className="text-primary"
							lineHeight={1}
						>
							{image.downloads?.toLocaleString() ?? "—"}
						</Text>
						<span
							className="label"
							style={{ fontSize: "0.55rem", marginTop: "2px" }}
						>
							Download
						</span>
					</Flex>
				</Flex>
			</a>
		</Flex>
	);
}
