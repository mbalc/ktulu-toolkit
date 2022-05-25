import { Button, FormLabel, TextField } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FormEvent, useCallback, useContext } from 'react';
import { GameHostContext } from '~/game/Context';
import { getStaticProps } from '~/translations';
export { getStaticProps };

const Host = () => {
  const { t } = useTranslation('gui');
  const router = useRouter();
  const gameHostContext = useContext(GameHostContext);
  console.log('context is', gameHostContext);
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const gameName = event.target.elements.gameName.value;

      import('peerjs').then(({ default: Peer }) => {
        const peer = new Peer(gameName);
        gameHostContext.setPeer(peer);

        router.push(`/host/${gameName}/lobby`);
      });
    },
    [gameHostContext, router]
  );
  return (
    <div>
      <FormLabel>{t`Tworzenie nowej rozgrywki`}</FormLabel>
      <form onSubmit={handleSubmit}>
        <TextField name="gameName" label={t`Nazwa rozgrywki`}></TextField>
        <Button type="submit">{t`Stwórz`}</Button>
      </form>
    </div>
  );
};

export default Host;
