import { atom } from 'recoil';

export const ledgerState = atom({
    key: 'ledger',
    default: {
        ledger: []
    },
  });