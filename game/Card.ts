import Team from '~/game/Team';

class Card {
  constructor(
    public team: Team,
    public name: string,
    public description: string
  ) {}
}

export default Card;
