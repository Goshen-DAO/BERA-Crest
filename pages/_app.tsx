import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  trustWallet,
  rainbowWallet,
  safeWallet,
} from "@thirdweb-dev/react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Head from "next/head";
import "/styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const clientAPI = process.env.THIRDWEB_API_KEY as string;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 80085, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://artio.rpc.berachain.com/"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Berachain Artio",
          symbol: "BERA",
        },
        shortName: "berachainartio", // Display value shown in the wallet UI
        slug: "berachain", // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "Berachain", // Name of the network
        name: "Berachain Artio", // Name of the network
      }}
      clientId={clientAPI}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        safeWallet({
          personalWallets: [
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            localWallet(),
            embeddedWallet({
              recommended: true,
              auth: {
                options: [
                  "email",
                  "google",
                  "apple",
                  "facebook",
                ],
              },
            }),
            trustWallet(),
            rainbowWallet(),
          ],
        }),
        localWallet(),
        embeddedWallet({
          recommended: true,
          auth: {
            options: [
              "email",
              "google",
              "apple",
              "facebook",
            ],
          },
        }),
        trustWallet(),
        rainbowWallet(),
      ]}
    >
      <ChakraProvider>
      <CSSReset />
        <Head>
          <title>
            Crest - A Non-Custodial Wallet for Secure, Low-cost Cross-Border
            Payment.
          </title>
          <meta
            name="description"
            content="A Non-Custodial Wallet leveraging blockchain technology. Experience secure and cost-effective cross-border payments while maintaining control over your funds. Join us on the journey towards a seamless and empowered financial future!"
          />
          <meta
            property="og:title"
            content="Crest - A Non-Custodial Wallet for Secure, Low-cost Cross-Border Payment"
          />
          <meta
            property="og:description"
            content="A Non-Custodial Wallet leveraging blockchain technology. Experience secure and cost-effective cross-border payments while maintaining control over your funds. Join us on the journey towards a seamless and empowered financial future!"
          />
          <meta property="og:image" content="/metadata.png" />
          <meta property="og:url" content="https://goshendao.com" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Crest - Your Secure Financial Wallet for Easy Transactions"
          />
          <meta
            name="twitter:description"
            content="Experience the security and convenience of Crest – your trusted financial companion for seamless fund storage, transfers, and receipts."
          />
          <meta name="twitter:image" content="/metadata.png" />
          <meta name="twitter:url" content="https://goshendao.com" />
        </Head>
        <Component {...pageProps} />
        <SpeedInsights />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
