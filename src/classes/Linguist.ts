import moment from 'moment';
type LedgerRow = {
    [index: string]: {
        timestamp: string,
        firstName: string,
        lastName: string,
        languageHours: string,
        
    }
}

export class Linguist {
    public name: string = "";
    public key: string = "";
    public attributes: {
       [index: string]: {
           value: string,
           date: number, //unix time to facilitate quick comparisons/sorting
       }; 
    } = {};
    public ledgerRows: any[] = [];

    
    public constructor(key: string = "") {
        this.key = key;        
    }

    public setName(name: string = ""){
        this.name = name;
    }

    public setLedger(rows: [] = []){
        this.ledgerRows = rows;
    }

    public appendToLedger(row: any){
        this.ledgerRows.push(row);
        this.extractAttributesFromRow(row);
    }
    
    public setAttributes(attribs: {}){
        this.attributes = attribs;
    }

    public setAttribute(key: string, value: string, date: number){
        
        this.attributes[key]  = {value: value, date: date};
    }

    extractAttributesFromRow(row: LedgerRow): void{
        let omitAttribs = ['timestamp', 'firstName', 'lastName'];        
        for (const attrib in row) {
            if(!omitAttribs.includes(attrib)){
                if(row[attrib]){
                    let rowTimestamp = moment(row['timestamp'].toString()).unix(); 
                    if(this.attributes[attrib] == undefined || 
                       rowTimestamp > this.attributes[attrib].date){
                            this.attributes[attrib] = { 
                                value: row[attrib].toString(), 
                                date: rowTimestamp,
                            };
                    }   
                }
            }
        }
    }

    
}