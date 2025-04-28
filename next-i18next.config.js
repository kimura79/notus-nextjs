import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation('common'); // <-- 'common' è il file JSON (locales/it/common.json)

  return (
    <section>
      <h1>{t('hero_title')}</h1>
      <p>{t('hero_subtitle')}</p>
    </section>
  );
};
