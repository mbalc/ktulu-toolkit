import { useTranslation } from 'next-i18next';
import allCards from '~/game/allCards';
import { getStaticProps } from '~/translations';
export { getStaticProps };

const ViewCards = () => {
  const { t, i18n } = useTranslation('cardDescriptions');
  console.log(i18n);

  return (
    <div>
      {allCards.map((card) => (
        <div key={`${card.team}-${card.roleName}`}>
          <h1>{t(card.roleName)}</h1>

          <small>{t(['Opisy', card.roleName].join('.'))}</small>
        </div>
      ))}
    </div>
  );
};

export default ViewCards;
