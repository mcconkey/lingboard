import { atom } from 'recoil';
import { LedgerProps} from '../types/LinguistBoardTypes';

export const ledgerState = atom({
    key: 'ledger',
    default: {
        ledger: [],
    },
  });
