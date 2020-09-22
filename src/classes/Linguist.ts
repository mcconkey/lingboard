export class Linguist {
    public name: string = "";
    public key: string = "";
    public attributes: {
       [index: string]: string; 
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

    public setAttribute(key: string, value: string){
        
        this.attributes[key]  = value;
    }

    extractAttributesFromRow(row: any): void{
        let omitAttribs = ['timestamp', 'firstName', 'lastName'];        
        for (const attrib in row) {
            if(!omitAttribs.includes(attrib)){
                if(row[attrib] !== ""){
                this.attributes[attrib] = row[attrib];
                }
            }
        }
    }

    
}