import type { NextPage } from "next";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import { FEATURES_IMAGE_URL, HERO_IMAGE_URL } from "../const/addresses";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"} p={4}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        px={{ base: 2, md: 10 }}
        py={8}
        borderRadius={20}
      >
        <Box flex={{ base: 1, md: 1 }} mb={{ base: 4, md: 0 }}>
          <MediaRenderer src={HERO_IMAGE_URL} height="100%" width="100%" />
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="center"
          w={{ base: "100%", md: "60%" }}
        >
          <Stack spacing={4}>
            <Heading
               bgGradient='linear(to-l, #7928CA, #FF0080)'
               bgClip='text'
               fontSize='6xl'
               fontWeight='extrabold'
            >
              The Simplest Way to Pay Your Friends
            </Heading>
            <Text fontSize={{ base: "md", md: "xl" }}>
              Transfer funds globally and have the recipient receive the money
              instantly
            </Text>
            <Flex alignItems="center" mt={4}>
              <Link href="/dashboard">
                <Button>Get Started</Button>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      <Box my={10}>
        <Center>
          <Heading as="h2" size="xl">
            How to Transfer?
          </Heading>
        </Center>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
          <Box>
            <MediaRenderer
              src={FEATURES_IMAGE_URL}
              height="100%"
              width="100%"
            />
          </Box>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Stack spacing={4}>
              <FeatureCard
                step={"01"}
                title={"Select an Asset"}
                description={
                  "Select from a list of verified Asset to send to your friends and family."
                }
              />
              <FeatureCard
                step={"02"}
                title={"Who to Send To"}
                description={
                  "Enter the UID of the recipient. Double-check the address as it's non-reversible."
                }
              />
              <FeatureCard
                step={"03"}
                title={"Write a Message"}
                description={"Add an optional message to your asset transfer."}
              />
            </Stack>
          </Flex>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Home;
