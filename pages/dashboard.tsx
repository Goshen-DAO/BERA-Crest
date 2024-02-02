// components/Dashboard.tsx
import React from "react";
import {
  FaExchangeAlt,
  FaHandHoldingUsd,
  FaCoins,
  FaArrowDown,
  FaArrowUp,
  FaWallet,
} from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/dashboard.module.css";
import {
  ConnectEmbed,
  darkTheme,
  useShowConnectEmbed,
  useBalance,
  useAddress
} from "@thirdweb-dev/react";
import {
  Heading,
  Text,
  Container,
  Box, // Add this import for Box
} from "@chakra-ui/react";

const loginOptional = false;

const customTheme = darkTheme({
  colors: {
    accentText: "#ffffff",
    accentButtonBg: "#297500",
    modalBg: "#000000",
    dropdownBg: "#000000",
    primaryText: "#ededef",
  },
});

const Dashboard: React.FC = () => {
  const showConnectEmbed = useShowConnectEmbed(loginOptional);
  const nativeCurrencyBalance = useBalance();
  const address = useAddress();

  return (
    <div>
      {showConnectEmbed ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "3rem", color: "white", fontWeight: "bold" }}>
              Log in to start
            </p>
            <ConnectEmbed
              theme={customTheme}
              style={{
                border: "none",
              }}
              auth={{
                loginOptional: loginOptional,
              }}
              modalTitle={"Crest"}
              switchToActiveChain={true}
              modalSize={"wide"}
              welcomeScreen={{
                img: {
                  src: "ipfs://QmVX51c7vF2n3qsgjiDYkN8VHnfQaQ4iapfDZQuM86Y8Uq/crest_icon_logo_white_nobg.png",
                  width: 150,
                  height: 150,
                },
                title:
                  "A Non-Custodial Wallet for Secure, Low-cost Cross-Border Payment",
                subtitle: "",
              }}
              modalTitleIconUrl={
                "ipfs://QmVX51c7vF2n3qsgjiDYkN8VHnfQaQ4iapfDZQuM86Y8Uq/crest_icon_logo_white_nobg.png"
              }
              privacyPolicyUrl={"https://cw.goshendao.com/privacy-policy"}
              onConnect={() => {
                console.log("wallet connected");
              }}
            />
          </div>
        </div>
      ) : (
        <div>
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
              </Container>
          <div className={styles.dashboardContainer}>
            <IconButton
              icon={<FaExchangeAlt />}
              label="Transfer"
              link="/transfer"
            />
            <IconButton
              icon={<FaHandHoldingUsd />}
              label="Claim"
              link="/claim"
            />
            <IconButton icon={<FaCoins />} label="Mint" link="/mint" />
            <IconButton
              icon={<FaArrowDown />}
              label="Deposit"
              link="/deposit"
            />
            <IconButton
              icon={<FaArrowUp />}
              label="Withdraw"
              link="/withdraw"
            />
            <IconButton icon={<FaWallet />} label="My Wallet" link={`/profile/${address}`} />

          </div>
        </div>
        
      )}
    </div>
  );
};

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  link: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, link }) => {
  return (
    <div className={styles.iconButton}>
      <Link href={link}>
        <div>
          {icon}
          <span>{label}</span>
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
