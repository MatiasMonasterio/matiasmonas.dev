import { Heading, Text, Image, Flex, Box } from "@chakra-ui/react";
import { Logo } from "src/components/common";
import { getProfile } from "src/services/server";

export default function headCardGenerator({ profile }) {
  return (
    <Box bg="white" w={800} py={10}>
      <Flex
        w={680}
        h={382}
        bg="blackAlpha.900"
        mx="auto"
        display="flex"
        gap={4}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        m={14}
      >
        <Image
          alt={profile.name}
          borderRadius="full"
          boxSize={110}
          mx="auto"
          height={110}
          loading="lazy"
          src={profile.image}
          minW={110}
        />

        <Box textAlign="center">
          <Heading color="whiteAlpha.900" fontSize="1.9rem">
            {profile.name}
          </Heading>

          <Text fontSize="xl" color="yellow.200" fontStyle="italic">
            {profile.position}
          </Text>
        </Box>

        <Logo size="40" color="whiteAlpha.700" />
      </Flex>
    </Box>
  );
}

export const getStaticProps = async () => {
  const profile = await getProfile();

  return {
    props: { profile },
  };
};
