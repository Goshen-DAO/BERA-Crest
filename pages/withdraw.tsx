import React from "react";
import { Container, Flex, Heading, Text, Button, Box } from "@chakra-ui/react";
import WithdrawNow from "../components/WithdrawNow";
import Link from "next/link";
import {
  useBalance,
} from "@thirdweb-dev/react";

const WithdrawalPage = () => {
  const nativeCurrencyBalance = useBalance();
  return (
    <Container maxW="full" p={[4, 6]}>
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
      <Flex direction="column" align="center" justify="center">
        <WithdrawNow />
      </Flex>
    </Container>
  );
};

export default WithdrawalPage;
