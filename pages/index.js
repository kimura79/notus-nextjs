import Head from "next/head";
import { useTranslation } from "next-i18next"; // <-- AGGIUNTO
import Landing from "./landing";

export default function Home() {
  const { t } = useTranslation('common'); // <-- AGGIUNTO

  return (
    <>
      <Head>
        <title>{t('title')}</title> {/* <-- TRADOTTO */}
        <meta name="description" content={t('description')} /> {/* <-- TRADOTTO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}
