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
    }
    
    public setAttributes(attribs: {}){
        this.attributes = attribs;
    }

    public setAttribute(key: string, value: string){
        
        this.attributes[key]  = value;
    }

}