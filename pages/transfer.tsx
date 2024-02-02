import { Container, Flex, Box, Button, Heading, Text } from "@chakra-ui/react";
import TransferCard from "../components/TransferCard";
import Link from "next/link";
import {
  useBalance,
} from "@thirdweb-dev/react";

export default function TransferPage() {
  const nativeCurrencyBalance = useBalance();
  return (
    <Box maxW="full" p={[4, 6]}>
      {/* Display native currency balance */}
      <Box bg="green.600" p={4} borderRadius="md">
                <Heading as="h3" size="md" mb={1}>
                  {nativeCurrencyBalance.isLoading
                    ? "Loading..."
                    : "Your Balance:"}
                </Heading>
                <Text>
                  {nativeCurrencyBalance.isLoading
                    ? "Loading..."
                    : nativeCurrencyBalance.data
                    ? `$${nativeCurrencyBalance.data.symbol} ${nativeCurrencyBalance.data.displayValue}`
                    : "No balance available."}
                </Text>
              </Box>
      <Link href="/dashboard">
            <Button mb={4}>Back</Button>
          </Link>
      <Container maxW={"1440px"}>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          backdropFilter="blur(10px)" // Adjust the blur strength as needed
        >
          <TransferCard />
        </Flex>
      </Container>
    </Box>
  );
}
