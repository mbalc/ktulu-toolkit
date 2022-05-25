import { useRouter } from 'next/router';
import { useContext } from 'react';
import { GameHostContext } from '~/game/Context';

const Lobby = () => {
  const router = useRouter();
  const gameHostContext = useContext(GameHostContext);
  console.log('context is', gameHostContext);

  if (!gameHostContext.peer) router.push('/host');

  return <div>Hura!</div>;
};
export default Lobby;
