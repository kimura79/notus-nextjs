import Head from "next/head";
import Landing from "./landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Epidermys - AI Skin Analysis</title>
        <meta name="description" content="Revolutionize your dermatology practice with Epidermys AI-powered skin analysis and patient insights." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}

