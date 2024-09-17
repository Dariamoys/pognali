import { Transport } from '@/types';
import { createContext } from 'react';


export const ExtraFormContext = createContext({
  hashTags: [] as string[],
  setHashTags: (arg: string[]) => {},
  transport: [] as Transport[],
  setTransport: (arg: Transport[]) => {},
})
