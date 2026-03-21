import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { RiArrowLeftLine } from "@remixicon/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import ImageStats from "@/components/image-stats";
import UserHeader from "@/components/user-header";
import { fetchPhotoById } from "@/lib/api";

export default function ImageDetails() {
	const { id } = useParams({ from: "/images/$id" });
	const { data: current, isLoading } = useQuery({
		queryKey: ["image", id],
		queryFn: () => fetchPhotoById(id),
	});

	if (isLoading || !current) {
		return (
			<Flex
				justifyContent="center"
				alignItems="center"
				h="calc(100vh - 120px)"
				className="animate-fade-in"
			>
				<Spinner size="lg" color="#0d9488" />
			</Flex>
		);
	}

	return (
		<Flex flexDir="column" h="calc(100vh - 120px)" overflow="hidden">
			<Box
				as="button"
				onClick={() => window.history.back()}
				display="flex"
				alignItems="center"
				gap={2}
				mb={4}
				fontSize="sm"
				fontWeight={500}
				cursor="pointer"
				transition="all 0.2s ease"
				_hover={{ color: "#0d9488", transform: "translateX(-4px)" }}
				bg="transparent"
				border="none"
				className="text-body animate-fade-in"
				flexShrink={0}
			>
				<RiArrowLeftLine size={18} />
				Back to gallery
			</Box>

			<Flex
				flex={1}
				minH={0}
				gap={6}
				flexDirection={{ base: "column", md: "row" }}
			>
				<Box
					flex="1"
					minW={0}
					minH={0}
					className="card animate-fade-in-up"
					p={2}
					overflow="hidden"
					boxShadow="0 20px 60px -15px rgba(13,79,79,0.1)"
				>
					<Image
						src={current.urls.regular}
						alt={current.description || current.id}
						w="full"
						h="full"
						objectFit="contain"
						borderRadius="12px"
						display="block"
					/>
				</Box>

				<Flex
					flexDir="column"
					w={{ base: "full", md: "300px" }}
					flexShrink={0}
					gap={4}
					className="animate-fade-in-up stagger-2"
					overflow="auto"
				>
					<Box className="card" p={5}>
						<UserHeader image={current} />
					</Box>

					<Box className="card" p={5}>
						<ImageStats image={current} />
					</Box>

					{current.description && (
						<Box className="card" p={5}>
							<p
								className="label"
								style={{ marginBottom: "0.75rem" }}
							>
								Description
							</p>
							<Text
								className="text-body"
								fontSize="sm"
								lineHeight={1.8}
							>
								{current.description}
							</Text>
						</Box>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
}
