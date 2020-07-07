import { TransactionType } from './TransactionType';

export class Instruction {
   id: number;
    secacc: number;
    idclient: number;
    idtransaction: number;
    instrument: string;
    quantity: number;
    price : number;
    Idcurrency: number;
    Isin: string;
    tradeDate: Date;
    settlementDate: Date;
    transactionType: TransactionType;
    active: boolean;
}

