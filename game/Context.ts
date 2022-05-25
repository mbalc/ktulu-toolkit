import Peer, { DataConnection } from 'peerjs';
import { createContext, Dispatch, SetStateAction } from 'react';
import Card from '~/game/Card';

type StateSetter<T> = Dispatch<SetStateAction<T>>;

export const defaultGameHostState = {
  peer: null as Peer | null,
  setPeer: (() => null) as StateSetter<Peer | null>,

  players: {} as Record<string, Card | null>,
  setPlayers: (() => null) as StateSetter<Record<string, Card | null>>,
};

export const defaultGameClientState = {
  conn: null as DataConnection | null,
  setConn: (() => null) as StateSetter<DataConnection | null>,

  players: {} as Record<string, Card | null>,
  setPlayers: (() => null) as StateSetter<Record<string, Card | null>>,
};

export const GameHostContext = createContext(defaultGameHostState);

export const GameClientContext = createContext(defaultGameClientState);
