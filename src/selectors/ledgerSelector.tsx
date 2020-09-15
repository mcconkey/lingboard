import { constants } from 'crypto';
import { selector, useRecoilValue } from 'recoil';
import { ledgerState } from '../atoms/ledgerAtom';

export const latestLedgerState = selector({
    key: 'latestLedgerState',
    get: ({get}) => {
      const ledger: any = get(ledgerState);
      if(ledger.length > 5){
        return ledger.slice(-5);
      }else{
        return ledger;
      }
    },
  });