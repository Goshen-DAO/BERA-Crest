import { Container, Box, Button, Text, Heading } from "@chakra-ui/react";
import React from "react";
import DepositForm from "../components/DepositForm";
import Link from "next/link";
import {
  useBalance,
} from "@thirdweb-dev/react";

const DepositPage = () => {
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
      <DepositForm />
    </Container>
  );
};

export default DepositPage;
