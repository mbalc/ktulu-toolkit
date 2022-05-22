import { useTranslation } from 'next-i18next';

import { getAllCards } from '~/game/allCards';

export { getStaticProps } from '~/translations';

const ViewCards = () => {
  const cardDescriptionsTranslation = useTranslation('cardDescriptions');

  const allCards = getAllCards(cardDescriptionsTranslation);

  return (
    <div>
      {allCards.map((card) => (
        <div key={card.name}>
          <h1>{card.name}</h1>
          <small>{card.description}</small>
        </div>
      ))}
    </div>
  );
};

export default ViewCards;
