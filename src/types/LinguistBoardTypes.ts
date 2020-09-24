export type LedgerProps = {
    ledgerRows: {
        [index: string]: {
            timestamp: string,
            trainingHours: string,
            reading: string,
            listening: string,
        };
    },
}

export type ScoreDatum = {
    score: string;
    date: Number;
};