import { UseTranslationResponse } from 'react-i18next';
import Card from '~/game/Card';
import Team from '~/game/Team';

export const getAllCards = (
  cardDescriptionsTranslation: UseTranslationResponse<'cardDescriptions'>
) => {
  const { t } = cardDescriptionsTranslation;

  return [new Card(Team.miastowi, t('Dziwka'), t`DziwkaOpis`)];
};
