import Head from "next/head";
import { useTranslation } from "next-i18next"; // <-- corretto
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // <-- necessario
import Landing from "./landing";

export default function Home() {
  const { t } = useTranslation('common'); // <-- corretto

  return (
    <>
      <Head>
        <title>{t('title')}</title> {/* <-- corretto */}
        <meta name="description" content={t('description')} /> {/* <-- corretto */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
}

// 🔥 Devi aggiungere questa funzione:
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
